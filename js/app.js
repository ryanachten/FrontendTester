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
    // Iterate through sections
    questionKeys.map( (section) => {
      // Iterate through section questions
      allQuestions[section].map( (item) => {
          allQuestionHash[uuid()] = {
            section,
            question: item.question,
            storedAnswer: item.answer
          };
      });
    });

    // Create test model + view and render
    const testContainer = new TestContainer({ allQuestions: allQuestionHash });
    testContainer.createNewModel(); //create initial question model

    const testContainerView = new TestContainerView({ model: testContainer });
    $('body').append(testContainerView.render().$el);
  };

  return { initialize: initialize };
});
