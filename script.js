"use strict";
//selectors ///////////////
const selectors = {
  question: document.querySelector("#question"),
  answerBtns: document.querySelector("#answer-buttons"),
  btns: document.querySelectorAll(".btn"),
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
//functions//////////////
let arrIndex = 0;
let score = 0;
const showData = function (dataArr) {
  if (arrIndex < dataArr.length) {
    selectors.question.innerHTML = `${dataArr[arrIndex].question}`;
    for (let i = 0; i < dataArr[arrIndex].options.length; i++) {
      for (let j = 0; j < selectors.btns.length; j++) {
        selectors.btns[j].innerHTML = `${dataArr[arrIndex].options[i++]}`;
      }
    }
  } else {
    selectors.nextBtn.style.display = "none";
    selectors.btns.forEach((btn) => {
      btn.disabled = true;
    });
  }
};
showData(quizData);

const controlNext = function (input) {
  const calssLisstArr = Array.from(selectors.btns).map((btn) =>
    Array.from(btn.classList)
  );
  const activeBtnIndx = calssLisstArr.findIndex((classes) =>
    classes.includes("active")
  );
  const checkAnswer = selectors.btns[activeBtnIndx].innerHTML;
  if (checkAnswer === quizData[arrIndex].answer) {
    arrIndex++;
    score++;
  }
  console.log(score);
};
//handlers ///////////////////
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

selectors.nextBtn.addEventListener("click", () => {
  controlNext();
  showData(quizData);
});
