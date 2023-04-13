"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
// import CardRepository from './repository/cardRepository';
// import { CardService } from './services/cardService';
const userRepository_1 = __importDefault(require("./repository/userRepository"));
const userService_1 = require("./services/userService");
const app = (0, express_1.default)();
const PORT = 4500;
app.get('/test', (req, res) => {
    res.json({
        data: "test Done"
    });
});
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield config_1.AppDataSource.initialize();
        console.log("DB connected");
        // const _cardRepository = new CardRepository();
        // const _cardService = new CardService(_cardRepository);
        // const userData =  await _cardService.fetchCardDataWithUserId(1);
        const _userRepository = new userRepository_1.default();
        const _userService = new userService_1.UserService(_userRepository);
        const userData = yield _userService.fetchUserDataWithCardId(2);
        console.log("test1");
        console.log(userData);
        console.log("test2");
    });
})();
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
