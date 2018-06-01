const TestContainerView = Backbone.View.extend({

  initialize: function (options) {
    // Ensure question collection is passed when view is instantiated
    if (!(options && options.model)) {
      throw new Error('questions view requires a collection');
    }
  },

  events: {
    'click .submitAnswer' : 'onSubmitAnswer'
  },

  onSubmitAnswer: function () {
    const textContent = this.$('.answerField').val();
    if (textContent) {
      // Set answer to model amd store in local storage
      const questionItem = this.model.get('questionItem');
      questionItem.set('answer', textContent);
      questionItem.storeAnswer();
      // Generate new model and render it to the screen
      this.model.createNewModel();
      this.render();
    }
    else {
      alert('Yo! Add an answer!');
    }
  },

  render: function () {
    const questionItem = this.model.get('questionItem');
    const view = new QuestionItemView({model: questionItem});
    this.$el.html(view.render().$el.append('<div><textarea class="answerField" /><button class="submitAnswer">Done!</button></div>'));

    return this;
  }
});
