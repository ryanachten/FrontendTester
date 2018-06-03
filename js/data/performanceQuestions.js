define([], function () {
  const performanceQuestions = [
    { question: "What tools would you use to find a performance bug in your code?",
      answer: "Main tool would be CDT’s Performance tab to see which functions are causing extensive parsing, evaluation, layout, painting or composting"
    },
    { question: "What are some ways you may improve your website's scrolling performance?",
      answer: "When scrolling, the browser figures out which pixels are new and need to be rendered; therefore you ideally want to minimise how much painting needs to occur as you scroll. There are some key factors to achieving this:\nReduce expensive styles (such as drop shadows)\nReduce reflows and repaints (such as offsetTop)\nLoading visual updates into scroll events (combine w/ requestAnimationFrame to optimise w/ browser)"
    },
    { question: "Explain the difference between layout, painting and compositing.",
      answer: "Layout calculates out how much space an element needs to take up on the screen and how it affects others (especially in parent/child relationships)\nPainting is the browser figures out what pixels need to be rendered to the screen. These pixels are often drawn onto multiple layers for compositing.\nCompositing determines the order in which these paint layers should appear"
    }
  ];

  return performanceQuestions;
});
