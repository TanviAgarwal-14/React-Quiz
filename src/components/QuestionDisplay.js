// src/components/QuestionDisplay.js
import React, { useState, useEffect } from 'react';
import '../App.css'; 

const QuestionDisplay = ({ quiz, currentQuestion, setCurrentQuestion, onComplete, theme }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    let timer;

    if (questionAnswered) {
      timer = setTimeout(() => {
        // Update user answers state
        setUserAnswers(prevAnswers => [
          ...prevAnswers,
          {
            questionIndex: currentQuestion,
            selectedAnswer
          }
        ]);

        if (currentQuestion < quiz.questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          // Calculate final score
          const finalScore = quiz.questions.reduce((score, question, index) => {
            const userAnswer = userAnswers.find(answer => answer.questionIndex === index);
            return score + (userAnswer && userAnswer.selectedAnswer === question.correctAnswer ? 1 : 0);
          }, 0);
          onComplete(finalScore);
        }

        setSelectedAnswer(null); // Reset selection for the next question
        setQuestionAnswered(false);
      }, 1000); // 1-second delay
    }

    return () => clearTimeout(timer); // Clean up timer
  }, [questionAnswered, currentQuestion, quiz.questions, userAnswers, selectedAnswer, setCurrentQuestion, onComplete]);

  const handleAnswerSelection = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setQuestionAnswered(true);
    }
  };

  if (!quiz.questions.length) {
    return <p>Loading questions...</p>; // Loading state or message
  }

  const isCorrect = (index) => {
    return index === quiz.questions[currentQuestion].correctAnswer;
  };

  const isIncorrect = (index) => {
    return selectedAnswer !== null && selectedAnswer === index && !isCorrect(index);
  };

    return (
      <div>
        <h3>{quiz.questions[currentQuestion].question}</h3>
        <ul>
          {quiz.questions[currentQuestion].options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswerSelection(index)}
              className={`option ${theme}-theme ${isCorrect(index) && selectedAnswer !== null ? 'correct' : isIncorrect(index) ? 'incorrect' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default QuestionDisplay;