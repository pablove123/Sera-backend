import { Router } from "express";
import * as reviewsCtrl from '../controllers/reviews.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', reviewsCtrl.index)
router.post('/', reviewsCtrl.create)
router.delete('/:id', reviewsCtrl.deleteReview)

router.use(decodeUserFromToken)

export { router }