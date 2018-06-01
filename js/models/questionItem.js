const QuestionItem = Backbone.Model.extend({

  validate: function (attrs) {
    // Ensure question attribute is specified when model is instantiated
    if (!attrs.key) {
      return 'key attribute needs to be specified';
    }
    if (!attrs.type) {
      return 'type attribute needs to be specified';
    }
    if (!attrs.question) {
      return 'question attribute needs to be specified';
    }
  },

  defaults: {
    userAnswer: null
  },

// Stores users answer and question key in local storage
  storeAnswer: function () {
    // get existing answers
    let allAnswers;
    if (sessionStorage.answers) {
      allAnswers = JSON.parse(sessionStorage.getItem('answers'));
    }
    else{
      allAnswers = [];
    }
    // add new answer
    allAnswers.push(JSON.stringify(this));
    // add to local storage
    window.sessionStorage.setItem('answers', JSON.stringify(allAnswers));
  }
});
