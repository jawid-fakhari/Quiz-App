"use strict";
//selectors
const selectors = {
  question: document.querySelector("#question"),
  answerBtns: document.querySelector("#answer-buttons"),
  btns: document.querySelectorAll(".btn"),
  nextBtn: document.querySelector("#next-btn"),
};
//quiz questions and answers
const quizData = [
  {
    question: "What is the role of CSS in web development?",
    options: [
      "Styling and formatting HTML content",
      "Defining database structures",
      "Creating interactive functions using JavaScript",
      "Optimizing server queries",
    ],
    answer: "Styling and formatting HTML content",
  },
  {
    question: "Which selector targets all elements of a specific type in CSS?",
    options: ["*", ".class", "#id", "!important"],
    answer: "*",
  },
  {
    question: 'What does the acronym "CSS" stand for?',
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
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

//functions

//handlers
selectors.btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    selectors.btns.forEach((otherBtn) => {
      if (otherBtn !== btn && otherBtn.classList.contains("active")) {
        otherBtn.classList.remove("active");
      }
    });
    if (!btn.classList.contains("active")) {
      btn.classList.add("active");
    }
    selectors.nextBtn.style.display = "block";
  });
});
