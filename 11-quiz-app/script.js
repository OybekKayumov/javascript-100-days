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