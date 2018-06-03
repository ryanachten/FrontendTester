define([], function () {
  const testingQuestions = [
    { question: "What are some advantages / disadvantages to testing your code?",
      answer: "Advantages:\nHelps ensure that the code that you’re writing doesn’t contain bugs before it is committed to the wider code base\nAs you make changes to other areas, you can be assured that you’re not disrupting anything other parts of the code base\nYou can test in areas of code in isolation to quickly identify the sources of bugs\nDisadvantages:\nWriting test cases can be very time consuming; creates technical debt"
    },
    { question: "What tools would you use to test your code's functionality?",
      answer: "I have some experience in Mocha, Jest and Jasmine, though I am yet to apply these skills to a proper project"
    },
    { question: "What is the difference between a unit test and a functional/integration test?",
      answer: "A unit test tests an isolated piece of code, typically a function. These test should be short and simple to write.\nAn integration test tests how different parts of a website work together. Where a unit test may mock database access, an integration test would actually test this access. Since these tests sometimes require additional resources such as a tst database, they are often slower and more difficult write.\nA functional test (aka End2End / Browser testing) is intended to be a complete test of the site’s functionality. Often this achieved through automated tools such as Selenium and results should evaluated from the experience of the end user. These tests are often harder to create and maintain, therefore should not be too granular."
    },
    { question: "What is the purpose of a code style linting tool?",
      answer: "A code style linting tool is used to help developers avoid messy code, problematice patterns and ensure that members of the development team are writing code according to style guidelines (such as indentation, trailing white space etc)"
    }
  ];

  return testingQuestions;
});
