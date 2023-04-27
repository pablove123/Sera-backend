import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', reviewsCtrl.index)
router.post('/', reviewsCtrl.create)

router.use(decodeUserFromToken)

export { router }