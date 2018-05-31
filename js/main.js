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
  const questionItems = new QuestionItems();
  for (let i = 0; i < questionList.length; i++) {
    const currentQuestion = allQuestionHash[questionList[i]];
    questionItems.add(new QuestionItem({
      key: questionList[i],
      section: currentQuestion.section,
      question: currentQuestion.question
    }));
  }

  const questionListView = new QuestionItemsView({model: questionItems});
  $('body').append(questionListView.render().$el);
});
