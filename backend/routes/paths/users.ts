import {Router} from 'express'
import {CreateUserDto} from "../../api/users/createUser.dto";
import {register, whoami, addGame} from '../../api/users/userController';
import {token} from "../../utils/token";
import {bodyValidate} from "../../utils/bodyValidator";
import {basicAuth} from "../../api/authorization";
const router = Router();

router.post('/createUser', bodyValidate(CreateUserDto), register);
router.post('/login', basicAuth )
router.post('/game/:id', token(true), addGame)



export default router;