import {Router} from 'express'
import paths from './paths/'


const router = Router();
router.use('/paths', paths)

export default router;