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

  // const questionItemView = new QuestionItemView({ model: questionItem });
  const questionContainer = new QuestionContainer({ allQuestions: allQuestionHash });
  questionContainer.createNewModel();

  const questionContainerView = new QuestionContainerView({ model: questionContainer });


  $('body').append(questionContainerView.render().$el);
});
