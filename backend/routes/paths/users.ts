import {Router} from 'express'
//import createNewUser from '../../api/users'

const router = Router();

router.post('/registration', createNewUser(), add)

export default router;