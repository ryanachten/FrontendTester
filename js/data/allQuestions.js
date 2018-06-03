define([
  'data/generalQuestions',
  'data/htmlQuestions',
  'data/cssQuestions',
  'data/jsQuestions',
  'data/testingQuestions',
  'data/performanceQuestions',
  'data/networkQuestions',
  'data/codingQuestions',
  'data/funQuestions'
], function (
    generalQuestions, htmlQuestions,
    cssQuestions, jsQuestions,
    testingQuestions, performanceQuestions,
    networkQuestions, codingQuestions,
    funQuestions
  ){

  const allQuestions = {
    general: generalQuestions,
    html : htmlQuestions,
    css : cssQuestions,
    javascript : jsQuestions,
    testing : testingQuestions,
    performance : performanceQuestions,
    network : networkQuestions,
    coding : codingQuestions,
    fun : funQuestions
  }

  return allQuestions;

});
