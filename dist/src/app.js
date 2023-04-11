"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const PORT = 4500;
config_1.AppDataSource.initialize().then(() => {
    console.log("DB connected");
}).catch((error) => {
    console.log(error);
});
app.get('/test', (req, res) => {
    res.json({
        data: "test Done"
    });
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
