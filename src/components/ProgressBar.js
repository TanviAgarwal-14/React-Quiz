// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  return (
    <div>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: 'blue',
          height: '10px',
        }}
      />
    </div>
  );
};

export default ProgressBar;