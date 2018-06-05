define([
  'underscore',
  'backbone',
  'models/questionItem'
], function (_, Backbone, QuestionItem) {

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
      let storedQuestions = JSON.parse(sessionStorage.getItem('answers'));
      if (!storedQuestions) {
        storedQuestions = {};
      }
      console.log();
      // Get active sections
      const allSections = this.get('questionSections');
      const activeSections = allSections.map( (item) => {
        if (item.active) {
            return item.section;
        }
      });
      // Iterate through questions
      const activeQuestions = {};
      Object.keys(allQuestionHash).map((key) => {
        if (
          //if question's section is active
          activeSections.includes(allQuestionHash[key].section)
          // and if the question has not already been stored
          && !storedQuestions.hasOwnProperty(key)
        ) {
          // add the question to available questions
          activeQuestions[key] = allQuestionHash[key];
        }
      });

      // If there are no available questions set to null
      // to display feedback message
      if (Object.keys(activeQuestions).length === 0) {
        console.log('No more questions to display');
        this.set('questionItem', null);
        return;
      }

      // Select random question based off available questions
      const tempIndex = Math.floor(Math.random()*Object.keys(activeQuestions).length);
      const tempKey = Object.keys(activeQuestions)[tempIndex];
      const currentQuestion = activeQuestions[tempKey];

      const questionItem = new QuestionItem({
        key: tempKey,
        section: currentQuestion.section,
        question: currentQuestion.question,
        storedAnswer: currentQuestion.storedAnswer
      });
      this.set('questionItem', questionItem);
    },
  });

  return TestContainer;

});
