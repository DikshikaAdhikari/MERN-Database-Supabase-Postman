import dotenv from 'dotenv';
dotenv.config()
import { Sequelize } from 'sequelize';

const dbconnection = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/postgres';
const sequelize = new Sequelize(dbconnection, {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
});
export default sequelize;