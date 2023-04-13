import { FindOptionsWhere, Repository } from "typeorm";
import { User } from "../entity/user";
import { AppDataSource } from "../config";

export default class UserRepository {
    private _userRepository: Repository<User>;
    constructor() {
        this._userRepository = AppDataSource.getRepository(User);
    }

    public async insert(model: User) {
        return await this._userRepository.save(model);
    }

    public async fetchUser(userRequest: Partial<User>) {
        return await this._userRepository.findOne({
            where: userRequest as FindOptionsWhere<User>,
        });
    }

    public async fetchUserDataWithCardId(userRequest: number) {
        return await this._userRepository.findOne({
            where: { cards: { userId: userRequest } },
            relations: ['cards']
        })
    }
}