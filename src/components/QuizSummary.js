// src/components/QuizSummary.js
import React from 'react';

const QuizSummary = ({ score, totalQuestions }) => {
  return (
    <div>
      <h2>Quiz Completed!</h2>
      <p>Your score is: {score} / {totalQuestions}</p>
    </div>
  );
};

export default QuizSummary;