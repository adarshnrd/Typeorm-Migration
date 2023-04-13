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
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const config_1 = require("../config");
class UserRepository {
    constructor() {
        this._userRepository = config_1.AppDataSource.getRepository(user_1.User);
    }
    insert(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._userRepository.save(model);
        });
    }
    fetchUser(userRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._userRepository.findOne({
                where: userRequest,
            });
        });
    }
    fetchUserDataWithCardId(userRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._userRepository.findOne({
                where: { cards: { userId: userRequest } },
                relations: ['cards']
            });
        });
    }
}
exports.default = UserRepository;
