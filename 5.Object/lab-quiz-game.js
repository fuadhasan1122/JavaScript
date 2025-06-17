
let questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Math",
    question: "What is 9 x 9?",
    choices: ["81", "72", "99"],
    answer: "81"
  },
  {
    category: "Geography",
    question: "What is the capital of Bangladesh?",
    choices: ["Paris", "Dhaka", "Berlin"],
    answer: "Dhaka"
  },
  {
    category: "Literature",
    question: "Who wrote 'Hamlet'?",
    choices: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
    answer: "William Shakespeare"
  },
  {
    category: "Technology",
    question: "Which language is used for web development?",
    choices: ["JavaScript", "Python", "C++"],
    answer: "JavaScript"
  }
];

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}


function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObject, computerChoice) {
  if (questionObject.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer's Choice:", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log(result);
