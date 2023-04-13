import { Card } from "../entity/card";
import CardRepository from "../repository/cardRepository";

export class CardService {
    private _cardRepository: CardRepository;
    constructor(cardRepository: CardRepository) {
        this._cardRepository = cardRepository;
    }

    public async add(model: Card) {
        return await this._cardRepository.insert(model);
    }


    public async fetchCardData(id: number) {
        await this.delay(3000);
        return await this._cardRepository.fetchCard({
            id,
        });
    }

    public async fetchCardDataWithUserId(id: number) {
        await this.delay(3000);
        return await this._cardRepository.fetchCard({
            userId: id,
        });
    }

    public async delay(delayBy: number) {
        return new Promise((resolve) => setTimeout(resolve, delayBy));
    }

    public async addModel() {
        const cardModel = new Card();
        cardModel.id = 4;
        cardModel.category = 'Show Card';
        cardModel.name = 'Ramesh';
        cardModel.userId = 2;
        return await this.add(cardModel);
    }
}
