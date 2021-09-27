
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log(userName)
var welcomeMessage = "Welcome "  +  userName + " :let's start";
console.log(welcomeMessage);

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("you are right")
    score = score + 1
  } else {
    console.log("you are wrong")
  }
  console.log("Your score is: ", score)
}
function outro(){
  console.log('------------------');
  console.log("Your final Score:", score);
}


var questions = [
  {
    question: "Where was Black Panther born? ",
    answer: "Wakanda"
  },
  {
    question: "what is Black Panther's real name? ",
    answer: "T'challa",
  },
  {
    question: "who played the character of Black Panther?",
    answer: "Chadwick boseman",

  },
  {
    question: "what is Black Panther's father's name?",
    answer:"T'Chaka",
  },
  {
    question: "what is Black Panther's suite made up of ?",
    answer: "vibranium",
  },
  {
    question: "where did Black Panther got vibranium from ?",
    answer: "crashed meteor"
  }
];

for (var i = 0; i < questions.length; i = i + 1) {
  play(questions[i].question, questions[i].answer);
}
outro()
