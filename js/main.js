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

  // Generate index questions
  const questionCount = 10;
  const questionList = [];
  for (let i = 0; i < questionCount; i++) {
    const tempIndex = Math.floor(Math.random()*Object.keys(allQuestionHash).length);
    const tempKey = Object.keys(allQuestionHash)[tempIndex];
    questionList.push(tempKey);
  }

  // Create models and add them to view
  const tempIndex = Math.floor(Math.random()*Object.keys(allQuestionHash).length);
  const tempKey = Object.keys(allQuestionHash)[tempIndex];
  const currentQuestion = allQuestionHash[tempKey];

  const questionItem = new QuestionItem({
    key: tempKey,
    section: currentQuestion.section,
    question: currentQuestion.question
  });
  const questionItemView = new QuestionItemView({ model: questionItem });

  $('body').append(questionItemView.render().$el);
});
