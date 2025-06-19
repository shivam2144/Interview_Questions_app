import React, { useState } from 'react';

const AnswerForm = ({ onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim() === '') {
      alert('Please enter your answer before submitting.');
      return;
    }
    onSubmit(answer);
    setAnswer(''); // clear input after submit
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <input
        type="text"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-2 rounded flex-grow"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AnswerForm;
