"use strict";
//selectors ///////////////
const selectors = {
  question: document.querySelector("#question"),
  answerBtns: document.querySelector("#answer-buttons"),
  nextBtn: document.querySelector("#next-btn"),
};
//quiz data ////////////////
const quizData = [
  {
    question: "What is the role of CSS in web development?",
    options: [
      "Defining database structures",
      "Styling and formatting HTML content",
      "Creating interactive functions using JavaScript",
      "Optimizing server queries",
    ],
    answer: "Styling and formatting HTML content",
  },
  {
    question: "Which selector targets all elements of a specific type in CSS?",
    options: [".class", "#id", "!important", "*"],
    answer: "*",
  },
  {
    question: 'What does the acronym "CSS" stand for?',
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Structure",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "What is the code to set the text color in CSS to red?",
    options: [
      "color: red;",
      "color: #FF0000;",
      "text-color: red;",
      "font-color: #FF0000;",
    ],
    answer: "color: red;",
  },
];

let score = 0;
let currentQuestion = 0;
let button;

//functions//////////////

//Show Data
function showQuestion(question) {
  selectors.question.textContent = question.question;
  selectors.answerBtns.innerText = "";

  question.options.forEach((option) => {
    button = document.createElement("button");
    button.textContent = option;
    button.classList.add("btn");

    button.addEventListener("click", (e) =>
      selectAnswer(e, option === question.answer)
    );

    selectors.answerBtns.appendChild(button);
  });
}
//check answer & score
function selectAnswer(e, isCorrect) {
  if (isCorrect) {
    score++;
    e.target.classList.add("right");
  }
  if (!isCorrect) e.target.classList.add("wrong");
  disableButtons();
  selectors.nextBtn.style.display = "block";
  console.log(score);
}
//Disable buttons when one of them is clicked
function disableButtons() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}
//next button handler
selectors.nextBtn.addEventListener("click", () => {
  if (currentQuestion + 1 < quizData.length) {
    currentQuestion++;
    showQuestion(quizData[currentQuestion]);
  } else {
    selectors.answerBtns.innerText = "";
    selectors.question.textContent = `Your answered ${score}/${quizData.length}.`;
  }
});

//call functions
showQuestion(quizData[currentQuestion]);
