const TestContainer = Backbone.Model.extend({

  validate: function (attrs) {
    // Ensure allquestions attribute is specified when model is instantiated
    if (!attrs.allQuestions) {
      return 'allQuestions attribute needs to be specified';
    }
  },

  defaults: {
    'showAnswer': false
  },

    // Create new model based off randomly assigned question
  createNewModel: function () {

    const allQuestionHash = this.get('allQuestions');
    const tempIndex = Math.floor(Math.random()*Object.keys(allQuestionHash).length);
    const tempKey = Object.keys(allQuestionHash)[tempIndex];
    const currentQuestion = allQuestionHash[tempKey];

    const questionItem = new QuestionItem({
      key: tempKey,
      section: currentQuestion.section,
      question: currentQuestion.question,
      storedAnswer: currentQuestion.storedAnswer
    });
    this.set('questionItem', questionItem);
  },
});
