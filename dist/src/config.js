"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const card_1 = require("./entity/card");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || 'root',
    password: 'Password123#@!',
    database: process.env.DB_NAME || 'TestMigration',
    synchronize: false,
    entities: [user_1.User, card_1.Card],
    logging: true,
    migrations: ["migration/*.js"],
});
