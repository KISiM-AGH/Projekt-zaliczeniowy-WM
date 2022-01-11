import {Router } from 'express'
import { Request, Response } from 'express'
import express from 'express'
const app = express()
const port = 3000
import routes from './routes'
import database from './utils/database_connection'

app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
        })
database.sync()