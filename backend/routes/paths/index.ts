import { Router } from 'express';
import games from './games'
import authors from './authors'
import users from './users'
import authorization from './authorization'

const router = Router()

router.use('/authors', authors)
router.use('/games', games)
router.use('/users', users)
router.use ('/authorization', authorization)


export default router

