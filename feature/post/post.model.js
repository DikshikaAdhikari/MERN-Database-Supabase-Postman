
import { DataTypes } from "sequelize";
import { sequelize } from "../../models/index.js";

const Post = sequelize.define("Post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
},
  description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: "posts",
        timestamps: true,
    },
);

export default Post;