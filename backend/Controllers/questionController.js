import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateQuestions = async (req, res) => {
  try {
    const { topic, difficulty } = req.body;

    if (!topic) {
      return res.status(400).json({ message: 'Topic is required' });
    }

    // Prompt updated to ask for questions + answers in a clear format
    const prompt = `
Generate 5 ${difficulty} level interview questions on the topic: ${topic}.
For each question, provide a short model answer after it.

Format:
1. Question text
Answer: answer text

2. Question text
Answer: answer text

...and so on.
    `;
    console.log('Attempting request...');

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const result = await model.generateContent(prompt);
     

    const generatedText = result.response.text();

    // Split by numbered questions (e.g., "1.", "2.", etc.)
    // We'll extract question and answer pairs

    const rawItems = generatedText.split(/\d+\./).filter(Boolean);

    const questionsWithAnswers = rawItems.map((item) => {
      const [questionPart, answerPart] = item.split(/Answer:/i);

      return {
        question: questionPart?.trim() || '',
        answer: answerPart?.trim() || 'Answer not provided',
      };
    });

    res.status(200).json({ questions: questionsWithAnswers });
  } catch (error) {
    console.error('Error generating questions:', error);
    res.status(500).json({
      message: 'Failed to generate questions',
      error: error.message,
    });
  }
};
