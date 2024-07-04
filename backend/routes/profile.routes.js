import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { updateProfile } from '../controllers/profile.controller.js';
import upload from '../config/multer.js';

const router = express.Router();

router.put('/update', protectRoute, upload.fields([{ name: 'profileImage', maxCount: 1 }, { name: 'coverImage', maxCount: 1 }]), updateProfile);

export default router;
