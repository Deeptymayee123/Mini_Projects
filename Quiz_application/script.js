const questions = [
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },

  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue-whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answereButtons = document.getElementById("answere-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  //initialize the quiz.
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"; //ensure the button text when the quiz start.
  showQuestion(); //calls the fun to display the first question.
}

function showQuestion() {
  //display crrent question and its answere.
  resetState(); // helper fun to clear the previous question/ans state (like old buttons and hiding the next button)
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1; //if index = 0, question no = 1, if index = 1, question = 2.
  questionElement.innerHTML = questionNo + "." + currentQuestion.question; // it will update the question.

  currentQuestion.answers.forEach((answer) => {
    //iterate over the answer array for the current question.
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answereButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct; //if correct, it add a data attribute to the button.i.e(data-attribute ="ture")
    }
    button.addEventListener("click", SelectAnswere); //attaches an event listener to all ans buttons, so when clicked the selectAnswer function runs.
  });
}

function resetState() {
  //clear the quiz area before loading a new question or the score.
  nextButton.style.display = "none"; //hide the "next button by default. It'll be shown only after an answer is selected."
  while (answereButtons.firstChild) {
    // a loop that remove all the answer button container, clearing the previous question's options.
    //console.log(answereButtons.firstChild);--> show all children

    answereButtons.removeChild(answereButtons.firstChild);
  }
}

function SelectAnswere(e) {
  console.log(e.target); // selected button

  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct"); // add the css class "correct" to the selected button(e.g., to turn it green)
    score++;
  } else {
    selectedBtn.classList.add("incorrect"); // add the css class "incorrect" to the selected button(e.g., to turn it red)
  }
  Array.from(answereButtons.children).forEach((button) => {
    //iterate over all the answer buttons to reveal the correct answer.
    if (button.dataset.correct === "true") {
      button.classList.add("correct"); // add class "correct" to show the user right answer.
    }
    button.disabled = true; //disable all the answer buttons after the user has made a selection to prevent further clicks.
  });
  nextButton.style.display = "block"; //makes the "next" button visible again, allowing the user to continue.
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleNextButton() {
  //define the function that runs when the "next" button is clicked.
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block"; //next button will visible.
};

startQuiz();
