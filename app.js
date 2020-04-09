var userScore = 0;
var computerScore = 0;
const userScore_span = document.querySelector("#user-score");
const computerScore_span = document.querySelector("#computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");
const restart_div = document.querySelector("#restart_btn");


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
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(computerChoice)}${smallCompWord}. You Win!!`;
  userChoice_div.classList.add("green-glow");
  setTimeout(function(){userChoice_div.classList.remove("green-glow")}, 500);
}


function lose(userChoice, computerChoice){
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertWord(userChoice)}${smallUserWord} loses to ${convertWord(computerChoice)}${smallCompWord}. You Lost!!`;
  userChoice_div.classList.add("red-glow");
  setTimeout(function(){userChoice_div.classList.remove("red-glow")}, 500);
}

function draw(userChoice, compChoice){
  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML = `It's draw!!`;
  userChoice_div.classList.add("grey-glow");
  setTimeout(function(){userChoice_div.classList.remove("grey-glow")}, 500);

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

function restart(){
  userScore = 0;
  computerScore = 0;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "Baby One More Time!!";
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

    restart_div.addEventListener("click", function(){
      restart();
    })

}

main();
