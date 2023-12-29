"use strict";
//quiz questions and answers
const quizMaterials = {
  questions: [
    {
      question: "What is the role of CSS in web development?",
      answers: [
        "Defining database structures",
        "Styling and formatting HTML content",
        "Creating interactive functions using JavaScript",
        "Optimizing server queries",
      ],
    },
    {
      question:
        "Which selector targets all elements of a specific type in CSS?",
      answers: [".class", "#id", "*", "!important"],
    },
    {
      question: 'What does the acronym "CSS" stand for?',
      answers: [
        " Computer Style Sheets",
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Structure",
      ],
    },
    {
      question: "What is the code to set the text color in CSS to red?",
      answers: [
        "color: #FF0000;",
        "text-color: red;",
        "font-color: #FF0000;",
        "color: red;",
      ],
    },
  ],
};
//selectors
const selectors = {
  question: document.querySelector("#question"),
  answerBtns: document.querySelector("#answer-buttons"),
  btn: document.querySelector(".btn"),
  nextBtn: document.querySelector("#next-btn"),
};
