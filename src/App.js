// src/App.js
import React, { useState, useEffect } from 'react';
import QuizSelection from './components/QuizSelection';
import QuestionDisplay from './components/QuestionDisplay';
import QuizSummary from './components/QuizSummary';
import ThemeToggle from './components/ThemeToggle';
import ProgressBar from './components/ProgressBar';
import { quizzes } from './data/quizzes';
import './App.css';

function App() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleQuizSelection = (quiz) => {
    setSelectedQuiz(quiz);
    setScore(null);
    setCurrentQuestion(0);
  };

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      {!selectedQuiz ? (
        <QuizSelection quizzes={quizzes} onSelectQuiz={handleQuizSelection} />
      ) : score === null ? (
        <>
          <ProgressBar
            currentQuestion={currentQuestion}
            totalQuestions={selectedQuiz.questions.length}
          />
          <QuestionDisplay
            quiz={selectedQuiz}
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            onComplete={handleQuizCompletion}
          />
        </>
      ) : (
        <QuizSummary score={score} totalQuestions={selectedQuiz.questions.length} />
      )}
    </div>
  );
}

export default App;