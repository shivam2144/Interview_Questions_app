import express from 'express';
import {generateQuestions} from '../Controllers/questionController.js';
import { protect } from '../middleware/authMiddleware.js';


const router = express.Router();

// POST /api/questions/generate
router.post('/generate', protect, generateQuestions);

export default router;
