import { Router } from "express";
import * as moodsCtrl from '../controllers/moods.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', moodsCtrl.index)

router.use(decodeUserFromToken)

export { router }