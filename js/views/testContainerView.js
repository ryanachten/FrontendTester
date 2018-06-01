const TestContainerView = Backbone.View.extend({

  initialize: function (options) {
    // Ensure question collection is passed when view is instantiated
    if (!(options && options.model)) {
      throw new Error('questions view requires a collection');
    }
  },

  events: {
    'click .submitAnswer' : 'onSubmitAnswer',
    'click .nextQuestion' : 'onNextQuestion'
  },

  onSubmitAnswer: function () {
    const textContent = this.$('.answerField').val();
    if (textContent) {
      // Set answer to model amd store in local storage
      const questionItem = this.model.get('questionItem');
      questionItem.set('userAnswer', textContent);
      questionItem.storeAnswer();

      // Render stored answer to screen
      this.model.set('showAnswer', true);
      this.render();
    }
    else {
      alert('Yo! Add an answer!');
    }
  },

  onNextQuestion: function () {
    // Hide answer for next question
    this.model.set('showAnswer', false);

    // Generate new model and render it to the screen
    this.model.createNewModel();
    this.render();
  },

  render: function () {

    const questionItem = this.model.get('questionItem');

    let templateData = {
      "showAnswer": this.model.get('showAnswer'),
      "question": questionItem.get('question'),
      "section": questionItem.get('section'),
      "userAnswer": questionItem.get('userAnswer'),
      "storedAnswer": questionItem.get('storedAnswer')
    };

    const template = $('#testContainerTemplate').html();
    const html = Mustache.render(template, templateData);
    this.$el.html(html);

    return this;
  }
});
