define([
  'jquery',
  'underscore',
  'backbone',
  'data/allQuestions',
  'models/testContainer',
  'views/testContainerView'
], function ($, _, Backbone, allQuestions, TestContainer, TestContainerView) {

  const initialize = function () {

    // Create question hash
    const questionKeys = Object.keys(allQuestions);
    const allQuestionHash = {};
    const questionSections = [];
    // Iterate through sections
    questionKeys.map( (section) => {
      // Add section name to section list
      questionSections.push({
        section, active: true
      });

      // Iterate through section questions and add them to hash
      let index = 0;
      allQuestions[section].map( (item) => {
        allQuestionHash[section+index] = {
          section,
          question: item.question,
          storedAnswer: item.answer
        };
        index++;
      });
    });

    // Create test model + view and render
    const testContainer = new TestContainer({
      allQuestions: allQuestionHash,
      questionSections,
    });
    testContainer.createNewModel(); //create initial question model

    const testContainerView = new TestContainerView({ model: testContainer });
    $('body').append(testContainerView.render().$el);
  };

  return { initialize: initialize };
});
