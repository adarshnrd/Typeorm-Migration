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
const card_1 = require("../entity/card");
const config_1 = require("../config");
class CardRepository {
    constructor() {
        this._cardRepository = config_1.AppDataSource.getRepository(card_1.Card);
    }
    insert(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._cardRepository.save(model);
        });
    }
    fetchCard(cardRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._cardRepository.findOne({
                where: cardRequest,
            });
        });
    }
    fetchCardUsingUserId(cardRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._cardRepository.findOne({
                where: cardRequest,
            });
        });
    }
}
exports.default = CardRepository;
