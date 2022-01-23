import {Router } from 'express'
import { Request, Response } from 'express'
import express from 'express'
const port = 3000
import cookieParser from "cookie-parser";
import routes from './routes'
import {dbCreateConnection} from './utils/database_connection';

export const app = express();
app.use(cookieParser());
app.use(express.json());
app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

app.use('/api', routes);
app.listen(port, () => {
    console.log(`app running on port ${port}`)
        });
(async () => {
    await dbCreateConnection();
})();