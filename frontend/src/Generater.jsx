// src/pages/Generate.jsx



//
import React, { useState } from 'react';
import API from './api/api';
import QuestionCard from './components/QuestionCard';
import AnswerForm from './components/AnswerForm';
import ProgressDashboard from './components/ProgressDashboard';
import Navbar from './components/Navbar';
import { useParams } from 'react-router-dom';
import CategorySelect from './components/Categories'

const Generate = () => {
  console.log("generate call")
  const { topic: topicFromURL } = useParams();

  const [questions, setQuestions] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [topic, setTopic] = useState(topicFromURL || '');
  const [difficulty, setDifficulty] = useState('easy');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCategorySelect, setShowCategorySelect] = useState(true);

  const handleGenerateQuestions = async (selectedTopic) => {
    const useTopic = selectedTopic || topic;
     console.log("Selected category:", selectedTopic);
    if (!useTopic) {
      alert('Please select or enter a topic!');
      return;
    }
    setLoading(true);
    try {
      
      const res = await API.post('/questions/generate', {
        topic: useTopic,
        difficulty,
      });

      const questionsWithStatus = res.data.questions.map((q) => ({
        
        question: q.question || q,
        answered: false,
        answer: '',
        aiAnswer: q.answer || q.aiAnswer || '',
       
      }));

      setQuestions(questionsWithStatus);
      setAnsweredCount(0);
      setTopic(useTopic);
      setSearchQuery('');
      setShowCategorySelect(false);
    } catch (error) {
      console.error('Error generating questions:', error);
      alert('Failed to generate questions.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSubmit = (questionIndex, answer) => {
    setQuestions((prev) => {
      const updated = [...prev];
      if (!updated[questionIndex].answered) {
        setAnsweredCount((count) => count + 1);
      }
      updated[questionIndex] = {
        ...updated[questionIndex],
        answered: true,
        answer,
      };
      return updated;
    });
  };

  const handleClearAnswers = () => {
    setQuestions((prev) =>
      prev.map((q) => ({ ...q, answered: false, answer: '' }))
    );
    setAnsweredCount(0);
  };

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-lg mt-40 mb-20">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              Topic: <span className="text-blue-600">{topic}</span>
            </h1>
            <button
              onClick={() => setShowCategorySelect(true)}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              &larr; Back to Categories
            </button>
          </div>

          <div className="mb-6 flex flex-wrap gap-3 items-center">
            <input
              type="text"
              placeholder="Change topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="border p-2 rounded flex-grow min-w-[200px]"
            />
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <button
              onClick={() => handleGenerateQuestions()}
              className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Generate Questions'}
            </button>
            <button
              onClick={handleClearAnswers}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear Answers
            </button>
          </div>

          {questions.length > 0 && (
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border p-2 rounded w-full mb-6"
            />
          )}

          {questions.length === 0 && !loading && (
            <p className="text-center text-gray-500 mt-20">
              No questions generated yet.
            </p>
          )}

          {filteredQuestions.map((qObj, index) => (
            <div
              key={index}
              className="mb-8 border rounded-lg p-5 shadow-md bg-white"
            >
              <QuestionCard questionObj={qObj} />
              <AnswerForm
                onSubmit={(answer) => handleAnswerSubmit(index, answer)}
                disabled={qObj.answered}
              />
              {qObj.answered && (
                <div className="mt-3">
                  <p className="text-green-700 font-semibold">
                    Your Answer: {qObj.answer}
                  </p>
                  {qObj.aiAnswer && (
                    <p className="text-blue-700 mt-1">
                      Correct Answer: {qObj.aiAnswer}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          {filteredQuestions.length === 0 && questions.length > 0 && (
            <p className="text-center text-gray-600">
              No questions match your search.
            </p>
          )}
        </div>
    </div>
  );
};

export default Generate;
