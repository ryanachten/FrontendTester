$(document).ready(function () {

  // Create question hash
  const questionKeys = Object.keys(questionObj);
  const allQuestionHash = {};
  questionKeys.map( (section) => {
    questionObj[section].map( (question) => {
        allQuestionHash[uuid()] = {
          section,
          question
        };
    });
  });

  const testContainer = new TestContainer({ allQuestions: allQuestionHash });
  testContainer.createNewModel();

  const testContainerView = new TestContainerView({ model: testContainer });

  $('body').append(testContainerView.render().$el);
});
