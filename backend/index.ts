import {Router } from 'express'
import { Request, Response } from 'express'
import express from 'express'
const app = express()
const port = 3000
import routes from './routes'
import {dbCreateConnection} from './utils/database_connection';

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app running on port ${port}`)
        });
(async () => {
    await dbCreateConnection();
})();