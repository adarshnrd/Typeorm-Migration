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
exports.CardService = void 0;
const card_1 = require("../entity/card");
class CardService {
    constructor(cardRepository) {
        this._cardRepository = cardRepository;
    }
    add(model) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._cardRepository.insert(model);
        });
    }
    fetchCardData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delay(3000);
            return yield this._cardRepository.fetchCard({
                id,
            });
        });
    }
    fetchCardDataWithUserId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delay(3000);
            return yield this._cardRepository.fetchCard({
                userId: id,
            });
        });
    }
    delay(delayBy) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => setTimeout(resolve, delayBy));
        });
    }
    addModel() {
        return __awaiter(this, void 0, void 0, function* () {
            const cardModel = new card_1.Card();
            cardModel.id = 4;
            cardModel.category = 'Show Card';
            cardModel.name = 'Ramesh';
            cardModel.userId = 2;
            return yield this.add(cardModel);
        });
    }
}
exports.CardService = CardService;
