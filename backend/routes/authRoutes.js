// backend/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
//import registerUser from '../Controller/authController.js'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
