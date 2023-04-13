import express, { Request, Response } from 'express'
import { AppDataSource } from './config';
// import CardRepository from './repository/cardRepository';
// import { CardService } from './services/cardService';
import UserRepository from './repository/userRepository';
import { UserService } from './services/userService';

const app = express();
const PORT = 4500;


app.get('/test', (req: Request, res: Response) => {
    res.json({
        data: "test Done"
    })
});

(async function () {
    await AppDataSource.initialize();
    console.log("DB connected");
    // const _cardRepository = new CardRepository();
    // const _cardService = new CardService(_cardRepository);
    // const userData =  await _cardService.fetchCardDataWithUserId(1);


    const _userRepository = new UserRepository();
    const _userService = new UserService(_userRepository);
    const userData = await _userService.fetchUserDataWithCardId(2);

    console.log("test1");
    console.log(userData);
    console.log("test2");
})();

app.listen(PORT, (): void => {
    console.log(`server is running on port ${PORT}`);
})