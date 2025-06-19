import React from 'react';

const ProgressDashboard = ({ answeredCount, totalQuestions }) => {
  const progress = totalQuestions
    ? Math.round((answeredCount / totalQuestions) * 100)
    : 0;

  return (
    <div className="border p-4 rounded mb-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Progress</h2>
      <p>
        {answeredCount} / {totalQuestions} questions answered
      </p>
      <div className="w-full bg-gray-200 rounded h-4 mt-2">
        <div
          className="bg-green-500 h-4 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressDashboard;
