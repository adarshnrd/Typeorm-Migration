import express ,{Request , Response} from 'express'
import { AppDataSource } from './config';

const app = express();
const PORT = 4500;

AppDataSource.initialize().then(()=>{
    console.log("DB connected")
}).catch((error)=>{
    console.log(error);
})

app.get('/test',(req:Request,res:Response)=>{
    res.json({
        data:"test Done"
    })
})

app.listen(PORT,():void=>{
    console.log(`server is running on port ${PORT}`);
})