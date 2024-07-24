import quizQuestions from "./quizQuestions.js";

let darkModeBtn = document.getElementById("dark-mode-btn");
let darkMode = false;

darkModeBtn.addEventListener("click", () => {
  if (!darkMode) {
    document.body.style.backgroundColor = "#222831";
    document.body.style.color = "gray";
    document.body.style.transition = "1s ease";
    darkModeBtn.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    darkModeBtn.style.color = "orange";
    darkModeBtn.style.transition = "1.5s ease";
    darkModeBtn.style.transform = "translateX(10px)";
    darkMode = true;
  } else {
    document.body.style.backgroundColor = "#EEEEEE";
    document.body.style.color = "black";
    document.body.style.transition = "1s ease";
    darkModeBtn.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    darkModeBtn.style.color = "purple";
    darkModeBtn.style.transition = "1.5s ease";
    darkModeBtn.style.transform = "translateX(0px)";
    darkMode = false;
  }
});

function test() {
  console.log(quizQuestions);
}

test();
