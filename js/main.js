$(document).ready(function () {

  // Create question hash
  const questionKeys = Object.keys(questionObj);
  const allQuestionHash = {};
  // Iterate through sections
  questionKeys.map( (section) => {
    // Iterate through section questions
    questionObj[section].map( (item) => {
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
});
