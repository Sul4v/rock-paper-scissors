var userScore = 0;
var computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");


function getComputerChoice(){
  const choices = ["r", "p", "s"];
  const random_number = Math.floor(Math.random() * 3);
  return choices[random_number];
}

function convertWord(letter){
  if (letter === "r") return "Rock";
  if (letter === "s") return "Scissors";
  return "Paper";
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(computerChoice)}${smallCompWord}. You Win!!`;
  document.querySelector("#"+userChoice).classList.add("green-glow");
  setTimeout(function(){console.log("hello")}, 3000);
}

setTimeout(function(){console.log("hello")}, 3000);

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} loses to ${convertWord(computerChoice)}${smallCompWord}. You Lost bruh!!`;

}

function draw(userChoice, compChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `It's draw!!`;
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main(){
    rock_div.addEventListener("click", function(){
      game("r");
    })

    paper_div.addEventListener("click", function(){
      game("p");
    })

    scissors_div.addEventListener("click", function(){
      game("s");
    })
}

main();
