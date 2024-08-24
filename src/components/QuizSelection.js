// src/components/QuizSelection.js
import React from 'react';

const QuizSelection = ({ quizzes, onSelectQuiz }) => {
  return (
    <div>
      <h2>Select a Quiz</h2>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} onClick={() => onSelectQuiz(quiz)}>
            {quiz.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizSelection;