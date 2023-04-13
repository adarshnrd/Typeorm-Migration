import { User } from "../entity/user";
import UserRepository from "../repository/userRepository";

export class UserService {
    private _userRepository: UserRepository;
    constructor(userRepository: UserRepository) {
        this._userRepository = userRepository;
    }

    public async add(model: User) {
        return await this._userRepository.insert(model);
    }

    public async fetchUserData(id: number) {
        await this.delay(3000);
        return await this._userRepository.fetchUser({
            id,
        });
    }

    public async fetchUserDataWithCardId(cardId: number) {
        return await this._userRepository.fetchUserDataWithCardId(cardId)
    }

    public async delay(delayBy: number) {
        return new Promise((resolve) => setTimeout(resolve, delayBy));
    }

    public async addModel() {
        const userModel = new User();
        userModel.id = 1;
        userModel.email = 'ram@gmail.com';
        userModel.name = 'ram';
        userModel.phone = '12122548';
        return await this.add(userModel);
    }
}
