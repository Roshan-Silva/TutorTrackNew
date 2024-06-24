import express from 'express';
import { getMe, signup, login, logout } from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';
<<<<<<< HEAD
=======
import { protectRole } from '../middleware/protectRole.js';
>>>>>>> main

const router = express.Router();

router.get('/me', protectRoute, getMe);
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

<<<<<<< HEAD
=======
router.get('/teacher-data', protectRoute, protectRole(['teacher']), (req, res) => {
    res.status(200).json({ message: "Teacher data" });
});

router.get('/student-data', protectRoute, protectRole(['student']), (req, res) => {
    res.status(200).json({ message: "Student data" });
});

>>>>>>> main
export default router;