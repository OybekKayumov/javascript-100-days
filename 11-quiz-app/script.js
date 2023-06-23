class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionsIndex = 0;
  }

  getQuestionIndex() {
    return this.questions[this.questionsIndex];
  }

  guess(answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionsIndex++;
  }

  isEnded() {
    return this.questionsIndex === this.questions.length;
  }
}

class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  isCorrectAnswer(choice) {
    return this.answer === choice;
  }
}

// display questions
function displayQuestion() {
  if (quiz.isEnded) {
    showScores();
  } else {
    // show question
    let questionElem = document.getElementById('question');
    questionElem.innerHTML = quiz.getQuestionIndex().text;

    // show options
    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let choiceElem = document.getElementById('choice' + i);
      choiceElem.innerHTML = choices[i];
      guess('btn' + i, choices[i]);
    }

    showProgress();
  }
}

// guess fn
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    displayQuestion();
  }
}

// show progress
function showProgress() {
  let curQuestionNumber = quiz.questionsIndex + 1;
  let progressElem = document.getElementById('progress');
  progressElem.innerHTML = 
    `Question ${curQuestionNumber} of ${quiz.question.length}`
}

// show score
function showScores() {
  let quizEndHtml = 
    `
      <h1>Quiz Completed</h1>
      <h2 id='score>Your Score: ${quiz.score} of ${quiz.question.length}</h2>
      <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
      </div>
    `;
  
  let quizElem = document.getElementById('quiz');
  quizElem.innerHTML = quizEndHtml;
}
