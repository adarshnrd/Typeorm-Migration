import { config } from "dotenv";
config();
import { DataSource } from "typeorm";
import { User } from "./entity/user";
import { Card } from "./entity/card";


export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: 'Password123#@!',
    database: process.env.DB_NAME || 'TestMigration',
    synchronize: false,
    entities: [User, Card],
    logging: true,
    migrations: ["migration/*.js"],
})
