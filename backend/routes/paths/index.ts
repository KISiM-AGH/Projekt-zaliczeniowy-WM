import { Router } from 'express';
import games from './games'
import users from './users'

const router = Router()

router.use('/games', games)
router.use('/users', users)


export default router

