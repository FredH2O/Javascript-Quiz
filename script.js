//import _ from "lodash";
import quizQuestions from "./quizQuestions.js";

let timer = document.getElementById("timer");
let question = document.getElementById("question");
let optionsContainer = document.getElementById("options-container");
let choices = document.querySelectorAll(".option");
let answer = document.getElementById("answer");
let nextBtn = document.getElementById("next-button");
let time = new Date();
let hour = time.getHours();

console.log(hour);

// generate random question and answers

function javascriptQuizLogic() {
  let randomQuestionIndex = Math.floor(Math.random() * quizQuestions.length);
  let pickedQuestion = quizQuestions[randomQuestionIndex];
  let shuffledChoices = _.shuffle(pickedQuestion.choices); // lodash library JS.

  question.textContent = pickedQuestion.question;
  answer.textContent = pickedQuestion.choices[pickedQuestion.answer];

  choices.forEach((button, index) => {
    button.textContent = shuffledChoices[index];
  });
  checkAnswer();
  nextButton();
}

// check answer

function checkAnswer() {
  choices.forEach((choice) => {
    choice.addEventListener("click", function () {
      if (choice.textContent == answer.textContent) {
        console.log("Correct!");
      } else {
        console.log("Wrong!");
      }
    });
  });
}

// next question

function nextButton() {
  nextBtn.addEventListener("click", () => {
    javascriptQuizLogic();
  });
}

javascriptQuizLogic();

/* Night mode & Day mode */
let darkModeBtn = document.getElementById("dark-mode-btn");
let darkMode = false;
let container = document.querySelector(".container");

darkModeBtn.addEventListener("click", () => {
  if (!darkMode) {
    document.body.style.backgroundColor = "#222831";
    document.body.style.transition = "1s ease";
    container.style.backgroundColor = "#EEEEEE";
    container.style.color = "#222831";
    darkModeBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    darkModeBtn.style.color = "orange";
    darkModeBtn.style.transition = "0.5s ease";
    darkModeBtn.style.transform = "translateX(10px)";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "#EEEEEE";
    document.body.style.transition = "1s ease";
    container.style.backgroundColor = "#222831";
    container.style.color = "#EEEEEE";
    darkModeBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    darkModeBtn.style.color = "purple";
    darkModeBtn.style.transition = "0.5s ease";
    darkModeBtn.style.transform = "translateX(0px)";
    darkMode = false;
  }
});
