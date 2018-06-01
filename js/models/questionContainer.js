const QuestionContainer = Backbone.Model.extend({

  createNewModel: function () {
    // Create models and add them to view
    const allQuestionHash = this.get('allQuestions');

    const tempIndex = Math.floor(Math.random()*Object.keys(allQuestionHash).length);
    const tempKey = Object.keys(allQuestionHash)[tempIndex];
    const currentQuestion = allQuestionHash[tempKey];

    const questionItem = new QuestionItem({
      key: tempKey,
      section: currentQuestion.section,
      question: currentQuestion.question
    });
    this.set('questionItem', questionItem);
  },
});
