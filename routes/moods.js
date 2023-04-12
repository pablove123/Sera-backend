import { Router } from "express";
import * as reviewsCtrl from '../controllers/moods'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

