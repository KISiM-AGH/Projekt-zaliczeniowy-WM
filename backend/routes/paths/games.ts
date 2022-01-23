import {Router} from 'express'
import {add, list, show, destroy} from "../../api/games/gamesController";
import {bodyValidate} from "../../utils/bodyValidator";
import {CreateGameDto} from "../../api/games/dto/createGameDto";
import {token} from "../../utils/token";
import {isAdmin} from "../../utils/isAdmin";

const router = Router();



router.post('/', token(true), isAdmin, bodyValidate(CreateGameDto), add )
router.get('/', token(true), list)
router.get('/:id', token(true), show)
router.delete('/:id', token(true), isAdmin, destroy)
export default router;

