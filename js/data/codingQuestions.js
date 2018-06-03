define([], function () {
  const codingQuestions = [
    { question: "What is the value of foo? var foo = 10 + '20';",
      answer: "‘1020’"
    },
    { question: "What will be the output of the code below?\nconsole.log(0.1 + 0.2 == 0.3);",
      answer: "False due to floating point precision in JS - make it fixed to pass true"
    },
    { question: "How would you make this work?\nadd(2, 5); // 7\nadd(2)(5); // 7",
      answer: "add(2, 5); // 7\nfunction add(a, b) {\nreturn a + b;\n}\n\nadd(2)(5); // 7\nfunction add(a) {\nreturn function (b) {\nreturn a + b;\n}\n}"
    },
    { question: "What value is returned from the following statement?\n'im a lasagna hog'.split('').reverse().join('');",
      answer: "The sentence will be reversed"
    },
    { question: "What is the value of window.foo?\n( window.foo || ( window.foo = 'bar' ) );",
      answer: "'Bar'"
    },
    { question: "What is the outcome of the two alerts below?(function() {\nvar bar = ' World';\nalert(foo + bar);\n})();\nalert(foo + bar);",
      answer: "First alert works as expected, while the second causes an uncaught reference error"
    },
    { question: "What is the value of foo.length?\nvar foo = [];\nfoo.push(1);\nfoo.push(2);",
      answer: "2"
    },
    { question: "What is the value of foo.x?\nvar foo = {n: 1};\nvar bar = foo;\nfoo.x = foo = {n: 2};",
      answer: "Undefined due to the right handed compilation order and rewriting of objects and old pointers"
    },
    { question: "What does the following code print?\nconsole.log('one');\nsetTimeout(function() {\nconsole.log('two');\n}, 0);\nconsole.log('three');",
      answer: "“one”, “three”, “two” since two is passed to the task queue which waits for the call stack to be completed before executing"
    },
    { question: "What is the difference between these four promises?\ndoSomething().then(function () {\nreturn doSomethingElse();\n});\n\ndoSomething().then(function () {\ndoSomethingElse();\n});\n\ndoSomething().then(doSomethingElse());\n\ndoSomething().then(doSomethingElse);",
      answer: "1) Once the promise resolves it will execute an anon func which returns the doSomethingElse func\n2) Once the promise resolves it will execute an anon func which executes the doSomethingElse func\n3) Once the promise resolves it will execute the doSomethingElse func\n4) It is unclear what doSomethingElse contains here"
    }
  ];

  return codingQuestions;
});
