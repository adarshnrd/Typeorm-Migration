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
exports.UserService = void 0;
const user_1 = require("../entity/user");
class UserService {
    constructor(userRepository) {
        this._userRepository = userRepository;
    }
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._userRepository.insert(model);
        });
    }
    fetchUserData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delay(3000);
            return yield this._userRepository.fetchUser({
                id,
            });
        });
    }
    fetchUserDataWithCardId(cardId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._userRepository.fetchUserDataWithCardId(cardId);
        });
    }
    delay(delayBy) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(resolve, delayBy));
        });
    }
    addModel() {
        return __awaiter(this, void 0, void 0, function* () {
            const userModel = new user_1.User();
            userModel.id = 1;
            userModel.email = 'ram@gmail.com';
            userModel.name = 'ram';
            userModel.phone = '12122548';
            return yield this.add(userModel);
        });
    }
}
exports.UserService = UserService;
