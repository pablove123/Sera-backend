import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', reviewsCtrl.index)
router.get('/review', reviewsCtrl.create)

router.use(decodeUserFromToken)

export { router }