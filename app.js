const quizData = [
  {
    question: "What is React.js mainly used for?",
    options: [
      "Server-side scripting",
      "Building User Interfaces",
      "Database management",
      "Creating Operating Systems",
    ],
    correctAnswer: "Building User Interfaces",
    time: 60,
    marks: 2,
  },
  {
    question: "React.js is based on which programming language?",
    options: ["Python", "JavaScript", "Java", "C++"],
    correctAnswer: "JavaScript",
    time: 60,
    marks: 2,
  },
  {
    question: "Which function is used to update the UI in React?",
    options: ["setState()", "updateUI()", "renderUI()", "changeState()"],
    correctAnswer: "setState()",
    time: 60,
    marks: 2,
  },
  {
    question: "How many types of React components are there?",
    options: [
      "1 (Only Class)",
      "2 (Functional and Class)",
      "3 (Functional, Class, Hybrid)",
      "4 (Functional, Class, Pure, Normal)",
    ],
    correctAnswer: "2 (Functional and Class)",
    time: 60,
    marks: 2,
  },
  {
    question:
      "Which is used to pass data from one component to another in React?",
    options: ["state", "props", "methods", "variables"],
    correctAnswer: "props",
    time: 60,
    marks: 2,
  },
  {
    question: "What is the main advantage of Virtual DOM?",
    options: [
      "Slows down the app",
      "Increases memory usage",
      "Faster UI updates",
      "Manages the database",
    ],
    correctAnswer: "Faster UI updates",
    time: 60,
    marks: 2,
  },
  {
    question: "Which company developed React.js?",
    options: ["Google", "Microsoft", "Facebook (Meta)", "Amazon"],
    correctAnswer: "Facebook (Meta)",
    time: 60,
    marks: 2,
  },
  {
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON Syntax Example",
      "Java Source Extension",
    ],
    correctAnswer: "JavaScript XML",
    time: 60,
    marks: 2,
  },
  {
    question: "Which attribute is required when rendering lists in React?",
    options: ["id", "value", "key", "name"],
    correctAnswer: "key",
    time: 60,
    marks: 2,
  },
  {
    question: "Which React Hook is used to handle side effects?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
    time: 60,
    marks: 2,
  },
];

let questionIndex = 0;
let timer = quizData[0].time;

let Questions = document.getElementById("currentquestion");
let displayOptions = document.getElementById("displayOption");
let currQuesNo = document.getElementById("currQuesNo");
let totalQuesNo = document.getElementById("totalQuesNo");
let displayTime = document.getElementById("displaytime");
let quizContainer = document.getElementById("quizBox");

let renderQuestion = () => {
  let currentQuestion = quizData[questionIndex];
  Questions.innerHTML = currentQuestion.question;

  totalQuesNo.innerHTML = quizData.length;
  currQuesNo.innerHTML = questionIndex + 1;

  displayOptions.innerHTML = "";

  for (let i = 0; i < currentQuestion.options.length; i++) {
    let optionss = currentQuestion.options[i];

    displayOptions.innerHTML += ` <button class="option" onclick="checkAnswr('${currentQuestion.correctAnswer}', '${optionss}', '${currentQuestion.marks}',)">${optionss}</button> `;
  }
};
renderQuestion();

let totalMarks = 0;
let checkAnswr = (a, b, c) => {
  if (a === b) {
    totalMarks += Number(c);
  }
  console.log(c);
  Next();
};

let Next = () => {
  if (questionIndex + 1 === quizData.length) {
    quizContainer.innerHTML = `
      <div class="result-box">
        <h2>🎉 Quiz Completed!</h2>
        <p>Your Total Marks: <b>${totalMarks}</b> / ${
      quizData.length * quizData[0].marks
    }</p>
        <button onclick="location.reload()">Restart Quiz</button>
      </div>
    `;
  } else {
    questionIndex++;
    renderQuestion();
    timer = quizData[questionIndex].time;
    displayTime.innerHTML = timer;
  }
};
let Previous = () => {
  questionIndex--;
  renderQuestion();
};

let checkTimer = () => {
  const currentQues = quizData[questionIndex];
  if (timer === 0) {
    Next();
    timer = currentQues.time;
  } else {
    timer--;
  }
  displayTime.innerHTML = timer;
};
console.log(timer);

setInterval(checkTimer, 1000);
