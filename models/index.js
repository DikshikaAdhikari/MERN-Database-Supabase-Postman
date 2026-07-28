import sequelize from "../config/connection.js";
import user from "../feature/user/user.model.js";
import post from "../feature/post/post.model.js";

user.hasMany(post, { foreignKey: "userId", as: "posts" });
post.belongsTo(user, { foreignKey: "userId", as: "user" });

const connectionDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully.");
        await sequelize.sync(
            { force: true }
        );
        console.log("Database synchronized successfully.");
    } 
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
export { connectionDB, sequelize };