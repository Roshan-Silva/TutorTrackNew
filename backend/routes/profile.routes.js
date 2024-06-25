import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { updateProfile } from '../controllers/profile.controller.js';

const router = express.Router();

router.put('/update', protectRoute, updateProfile);

export default router;
