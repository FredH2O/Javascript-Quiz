//import _ from "lodash";
import quizQuestions from "./quizQuestions.js";

let mainContainer = document.querySelector(".container");
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let optionsContainer = document.getElementById("options-container"); // not used
let choices = document.querySelectorAll(".option");
let answer = document.getElementById("answer");
let nextBtn = document.getElementById("next-button");
let scoreElement = document.getElementById("score");
let darkModeBtn = document.getElementById("dark-mode-btn");
let questionRemaining = document.getElementById("questionNumber");

let score = 0;
const TIME_START = 60;
let timeLeft = TIME_START;
let timing;

const time = new Date();
const hour = time.getHours();
let darkMode = false;
let questionsRemainingArray = [];

function startQuiz() {
  score = 0;
  scoreElement.textContent = score;
  questionsLeft();
  javascriptQuizLogic();
  checkAnswer();
  nextButton();
  darkModeToggle();
  timeRemaining();
}

function resetGame() {
  score = 0;
  scoreElement.textContent = score;
  questionsLeft();
  questionRemaining.textContent = questionsRemainingArray.length;
}

function timeRemaining() {
  clearInterval(timing);
  timing = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;
    if (timer.textContent == 0) {
      console.log(questionNumber);
      timeLeft = 60;
      javascriptQuizLogic();
    }
  }, 1000);
}

function questionsLeft() {
  questionsRemainingArray = [];

  for (let x = 0; x < quizQuestions.length; x++) {
    questionsRemainingArray.push(x);
  }
}

// most logic here
function javascriptQuizLogic() {
  timeLeft = 60;
  if (questionsRemainingArray.length === 0) {
    resetGame(); // reset everything
    alert("Finish!");
    return;
  }

  let randomQuestionIndex = Math.floor(
    Math.random() * questionsRemainingArray.length
  );
  let questionChosen = questionsRemainingArray[randomQuestionIndex];
  let pickedQuestion = quizQuestions[questionChosen];
  let shuffledChoices = _.shuffle(pickedQuestion.choices); // lodash library JS.!!! thank you

  questionsRemainingArray.splice(randomQuestionIndex, 1);

  question.textContent = pickedQuestion.question;
  answer.textContent = pickedQuestion.choices[pickedQuestion.answer];
  questionRemaining.textContent = questionsRemainingArray.length;

  choices.forEach((button, index) => {
    button.textContent = shuffledChoices[index];
  });
}

// check answer

function checkAnswer() {
  choices.forEach((pickedChoice) => {
    pickedChoice.addEventListener("click", pickedChoiceClick); // each choice will call the picked hcoice function
  });
}

function pickedChoiceClick(e) {
  const choice = e.target;
  if (choice.textContent == answer.textContent) {
    answer.innerHTML = `CORRECT! <i class="bi bi-check-lg"></i>`;
    console.log("Correct!");
    score++;
    scoreElement.textContent = score;
  } else {
    console.log("Wrong!");
  }
  setTimeout(() => {
    javascriptQuizLogic();
  }, 3000);
}

// next question
function nextButton() {
  nextBtn.addEventListener("click", () => {
    javascriptQuizLogic();
  });
}

/* Night mode & Day mode */
function darkModeToggle() {
  darkModeBtn.addEventListener("click", () => {
    if (!darkMode) {
      document.body.style.backgroundColor = "#222831";
      document.body.style.transition = "1s ease";
      mainContainer.style.backgroundColor = "#EEEEEE";
      mainContainer.style.color = "#222831";
      darkModeBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
      darkModeBtn.style.color = "orange";
      darkModeBtn.style.transition = "0.5s ease";
      darkModeBtn.style.transform = "translateX(10px)";
      darkMode = true;
    } else {
      document.body.style.backgroundColor = "#EEEEEE";
      document.body.style.transition = "1s ease";
      mainContainer.style.backgroundColor = "#222831";
      mainContainer.style.color = "#EEEEEE";
      darkModeBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
      darkModeBtn.style.color = "purple";
      darkModeBtn.style.transition = "0.5s ease";
      darkModeBtn.style.transform = "translateX(0px)";
      darkMode = false;
    }
  });
}

startQuiz();
