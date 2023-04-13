import { FindOptionsWhere, Repository } from "typeorm";
import { Card } from "../entity/card";
import { AppDataSource } from "../config";

export default class CardRepository {
    private _cardRepository: Repository<Card>;
    constructor() {
        this._cardRepository = AppDataSource.getRepository(Card);
    }

    public async insert(model: Card) {
        return await this._cardRepository.save(model);
    }

    public async fetchCard(cardRequest: Partial<Card>) {
        return await this._cardRepository.findOne({
            where: cardRequest as FindOptionsWhere<Card>,
        });
    }

    public async fetchCardUsingUserId(cardRequest: Partial<Card>) {
        return await this._cardRepository.findOne({
            where: cardRequest as FindOptionsWhere<Card>,
        });
    }
}