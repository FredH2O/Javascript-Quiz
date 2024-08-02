//try {
import quizQuestions from "./quizQuestions.js";

const TIME_START = 60;
const ORANGE_TIME = 30;
const RED_TIME = 10;
const RESTART_TIME = 2500;
const TIME_INTERVAL = 1000;

let mainContainer = document.querySelector(".container");
let timer = document.getElementById("timer");
let question = document.getElementById("question");
let choices = document.querySelectorAll(".option");
let answer = document.getElementById("answer");
let nextBtn = document.getElementById("next-button");
let scoreElement = document.getElementById("score");
let darkModeBtn = document.getElementById("dark-mode-btn");
let questionRemaining = document.getElementById("questionNumber");

let score = 0;
let timeLeft = TIME_START;
let timing;
let questionsRemainingArray = [];
let pickedQuestion;
let correctAnswer;
let darkMode = false;

function startQuiz() {
  score = 0;
  scoreElement.textContent = score;
  questionsLeft();
  javascriptQuizLogic();
  checkAnswer();
  nextButton();
  timeRemaining();
  darkModeToggle();
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

    if (timeLeft <= RED_TIME) {
      timer.style.color = "red";
    } else if (timeLeft <= ORANGE_TIME) {
      timer.style.color = "orange";
    } else {
      timer.style.color = "";
    }

    if (timeLeft === 0) {
      timeLeft = 60;
      javascriptQuizLogic();
    }
  }, TIME_INTERVAL);
}

// remaining questions
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
    let finalScore = (score / quizQuestions.length) * 100; // get percentage
    console.log(finalScore);

    if (finalScore >= 70) {
      answer.textContent = `You pass! Your grade is ${finalScore.toFixed(
        2
      )}% !`;
      playConfetti();
    } else {
      answer.textContent = `You didn't pass.. ${finalScore.toFixed(
        2
      )}%. Try again?!`;
    }
    resetGame();
    return;
  }

  let randomQuestionIndex = Math.floor(
    Math.random() * questionsRemainingArray.length
  );
  let questionChosen = questionsRemainingArray[randomQuestionIndex];
  pickedQuestion = quizQuestions[questionChosen];
  let shuffledChoices = _.shuffle(pickedQuestion.choices); // lodash library JS
  console.log(pickedQuestion.choices[pickedQuestion.answer]);
  correctAnswer = pickedQuestion.choices[pickedQuestion.answer];

  questionsRemainingArray.splice(randomQuestionIndex, 1);

  question.textContent = pickedQuestion.question;
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
  disableButtons();
  //console.log(choice.textContent);
  if (choice.textContent == correctAnswer) {
    console.log("Correct!");
    answer.innerHTML = `CORRECT! <i class="bi bi-check-lg"></i> `;

    choices.forEach((btn) => {
      btn.classList.add("correct");
    });

    score++;
    scoreElement.textContent = score;
  } else {
    console.log("Wrong!");
    answer.innerHTML = `WRONG! The answer is <b><i>${correctAnswer}</i></b>`;

    choices.forEach((btn) => {
      btn.classList.add("wrong");
    });
  }

  setTimeout(() => {
    answer.textContent = "";
    javascriptQuizLogic();
    enableButtons();
  }, RESTART_TIME);
}

function disableButtons() {
  nextBtn.disabled = true;
  choices.forEach((buttons) => {
    buttons.disabled = true;
  });
}

function enableButtons() {
  nextBtn.disabled = false;
  choices.forEach((buttons) => {
    buttons.disabled = false;
    buttons.classList.remove("correct");
    buttons.classList.remove("wrong");
  });
}

// next question
function nextButton() {
  nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    javascriptQuizLogic();

    setTimeout(() => {
      nextBtn.disabled = false;
    }, RESTART_TIME);
  });
}

// plays confetti animation from confetti.js library
function playConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
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
//} catch (error) {
//  console.error("Error occurred:", error);
//  alert(`Error: ${error.message}`);
//}
