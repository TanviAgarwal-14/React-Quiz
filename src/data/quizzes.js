// src/data/quizzes.js
export const quizzes = [
  {
    id: 1,
    name: 'JavaScript Basics',
    questions: [
      {
        question: 'What is a closure?',
        options: ['Function', 'Variable', 'Object', 'Block'],
        correctAnswer: 0,
      },
      {
        question: 'Which company developed JavaScript?',
        options: ['Microsoft', 'Google', 'Netscape', 'Amazon'],
        correctAnswer: 2,
      },
      {
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: ['variable x = 10', 'let x = 10', 'dim x = 10', 'x := 10'],
        correctAnswer: 1,
      },
      {
        question: 'Which of the following is not a valid data type in JavaScript?',
        options: ['String', 'Number', 'Boolean', 'Character'],
        correctAnswer: 3,
      }
    ],
  },
  {
    id: 2,
    name: 'React Fundamentals',
    questions: [
      {
        question: 'What is the virtual DOM?',
        options: [
          'A real DOM',
          'A copy of the real DOM',
          'A lightweight representation of the real DOM',
          'None of the above',
        ],
        correctAnswer: 2,
      },
      {
        question: 'What is JSX in React?',
        options: [
          'A function',
          'A syntax extension for JavaScript',
          'A CSS framework',
          'A JavaScript library'
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the purpose of props in React?',
        options: [
          'To store local component data',
          'To pass data from parent to child components',
          'To manage component lifecycle methods',
          'To style components'
        ],
        correctAnswer: 1,
      },
      {
        question: 'Which hook is used to manage state in a functional component?',
        options: [
          'useState',
          'useEffect',
          'useReducer',
          'useContext'
        ],
        correctAnswer: 0,
      },
      {
        question: 'Which of the following is a popular library for managing global state in React?',
        options: [
          'React Router',
          'Redux',
          'Axios',
          'Jest'
        ],
        correctAnswer: 1,
      },
    ],
  },
];