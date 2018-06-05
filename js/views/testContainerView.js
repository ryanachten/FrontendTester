define([
  'jquery',
  'underscore',
  'backbone',
], function ($, _, Backbone) {

  const TestContainerView = Backbone.View.extend({

    initialize: function (options) {
      // Ensure question collection is passed when view is instantiated
      if (!(options && options.model)) {
        throw new Error('questions view requires a collection');
      }
    },

    events: {
      'click .submitAnswer' : 'onSubmitAnswer',
      'click .nextQuestion' : 'onNextQuestion',
      'click .sectionToggleInput' : 'onToggleQuestionSection'
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

    onToggleQuestionSection: function (e) {
      const toggledSection = e.target.value;
      const checked = e.target.checked;
      const allSections = this.model.get('questionSections');
      const newSections = allSections.map((item) => {
        if (item.section === toggledSection) {
          item.active = checked
        }
        return item;
      });
      this.model.set('questionSections', newSections);
    },

    render: function () {
      const questionItem = this.model.get('questionItem');

      let templateData = {
        "sections" : this.model.get('questionSections'),
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

  return TestContainerView;

});
