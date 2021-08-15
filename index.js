const readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log("Think you know me really well? Well then let's find out !!!\n");

const userName = readlineSync.question('Your name? \n');

console.log(`\nHey ${userName}. Let's see how much you know me.\n`);

// Global variables
let score = 0;

const quesSet = [
  {
    ques : "How am I known by, among my friends ?\na.Malla\nb.Adi\nc.Mallya",
    ans : "c"
  },
  {
    ques : "Which sport am I passionate about ?\na.Hockey\nb.Football\nc.Cricket",
    ans : "b"
  },
  {
    ques : "What am I currently doing ?\na.Engineering\nb.IT Job\nc.Blogging",
    ans : "a"
  },
  {
    ques : "Which is my favourite pop-culture movie ?\na.Batman Vs Superman\nb.Guardians Of The Galaxy\nc.Star Wars",
    ans : "b"
  },
  {
    ques : "What do I least like ?\na.Gaming\nb.Films\nc.Food",
    ans : "a"
  },
  {
    ques : "When is my birthday ?\na.10th Oct\nb.12th Oct\nc.12th Dec",
    ans : "c"
  },
  {
    ques : "Something I like but haven't shared much about ?\na.Films\nb.Food\nc.Programming",
    ans : "c"
  },
  {
    ques : "What is my favourite color ?\na.Black\nb.Blue\nc.Red",
    ans : "b"
  },
  {
    ques : "What instrument do I know to play ?\na.Guitar\nb.Drums\nc.Flute",
    ans : "a"
  },
  {
    ques : "Something I love and rave about ?\na.Social Media\nb.Good Music\nc.Programming",
    ans : "b"
  }
];

const leaderBoard = [
  {name: "Harish", score: 20},
  {name: "Julie", score: 18},
  {name: "Anil", score: 10}
];

// take user input, validate answer, update score
for(let i=0; i<quesSet.length; i++){
  validateAnswer(i+1, quesSet[i].ques, quesSet[i].ans);
}

function validateAnswer(quesNo, ques, ans){
  const userAns = readlineSync.keyIn(`${quesNo}. ${ques} \n`, {limit: '$<a-c>'});

  if(userAns === ans){
    console.log("Bang On! Take your point.\n");
    score+=2;
  }else{
    console.log("You are Wrong :/\n");
  }

  console.log(`Your current score is ${score}\n`);
  console.log('--------------------------\n');
} 

// Print final score
console.log(`Yay! Your Final Score is ${score}`);
console.log('--------------------------\n');

console.log("\n\nLeaderboard Standings\n")
for(let i=0; i< leaderBoard.length; i++){
  console.log(`${leaderBoard[i].name} : ${leaderBoard[i].score}`);
}

console.log("\nDid you beat them ? You could send us a screenshot to be added to our leaderboards.\n")