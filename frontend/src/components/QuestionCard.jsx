import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // or any icon library you prefer

const QuestionCard = ({ questionObj }) => {
   const { question, modelAnswer } = questionObj;
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-gray-300 p-5 rounded-2xl shadow-md mb-4 bg-gradient-to-br from-white to-gray-100 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-xl font-bold text-blue-800">
          {question}
        </h2>
        <button
          onClick={() => setShowAnswer(prev => !prev)}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          {showAnswer ? (
            <>
              <ChevronUp className="w-5 h-5 mr-1" />
              Hide Answer
            </>
          ) : (
            <>
              <ChevronDown className="w-5 h-5 mr-1" />
              Show Answer
            </>
          )}
        </button>
      </div>

      {showAnswer && (
        <div className="bg-white border-t border-gray-200 pt-3">
          <p className="text-gray-800">
            <span className="font-semibold text-green-600">AI Answer:</span>{' '}
            {modelAnswer || <em>No answer provided.</em>}
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
