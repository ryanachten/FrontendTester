define([], function () {
  const jsQuestions = [
    { question: "Explain event delegation. Explain how this works in JavaScript",
      answer: "Instead of attaching an event to numerous similar nodes, an event is attached to the parent of the nodes. Using the element.matches API we can confirm that the correct target as the source of the event."
    },
    { question: "Explain how prototypal inheritance works",
      answer: "Everything in js inherits from the base construct; the object. This object can be extended using the prototype architecture, a private link, allowing us to pass down properties.\nWith each instance, a new prototype is created, creating the prototypical chain.\nWith ES6, JS now has a Class system, however, it is syntactic sugar and remains prototypical under the hood."
    },
    { question: "What do you think of AMD vs CommonJS?",
      answer: "CommonJS’ require/export system is one I am very familiar with through my time working with NodeJS and ES6’s import/export system in Babel. I absolutely love this modularity as it reduces globals and feels much more OOP.\nAMD (Async Module Definition) is that it is asynchronous and therefore non-blocking. This is the approach adopted by RequireJS."
    },
    { question: "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
      answer: "An IIFE needs to be enclosed within grouping operator to be self executing. Changing it to (function foo(){})(); would allow the function to work."
    },
    { question: "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
      answer: "Null simply refers to a variable which has been defined as having no value\nUndefined refers to a variable which has been declared but has no value assigned to it.\nUndeclared refers to a variable that has been declared w/o the var/let keyword and exists only on the global object.\nNull: check against value: if(foo === null)\nUndefined: check against type: if( typeof(foo) === ‘undefined’ )\nUndeclared: use try/catch against the variable. If the catch error name is reference error, the variable is undeclared\ntry{\nundeclaredVar\n}\ncatch(e) {\nif(e.name === 'ReferenceError'){}"
    },
    { question: "What is a closure, and how/why would you use one?",
      answer: "A closure is a combination of a function and the lexical environment in which it was created. Closures can be useful is a number of circumstances, such as a creating private methods to avoid polluting the global namespace.\nvar adder = function(){\nvar msg = 'result is: '\nreturn function(a, b){\nreturn msg + (a + b);\n}\n}\nvar add = adder();\nconsole.log(add(1,2));"
    },
    { question: "Can you describe the main difference between a forEach loop and a .map() loop and why you would pick one versus the other?",
      answer: "Foreach simply loops over each item in an array, providing access to the value of each index.\nForeach may be more appropriate where you’re not trying to save new data but instead do something with the data\nMap returns a new array based on the results of calling a function on each array element. \nMap is more appropriate when manipulating and saving data from an array. Since it returns a new array, can be chained with filter() etc. Map is also supposedly much faster."
    },
    { question: "What's a typical use case for anonymous functions?",
      answer: "Anonymous functions are not hoisted to the top of the script and can therefore not be executed before they appear in the script.\nAnonymous functions are also expressions not declarations, and as such can be assigned to variables, properties etc making them more flexible than named functions.\nThey also used in IIFE’s"
    },
    { question: "How do you organize your code? (module pattern, classical inheritance?)",
      answer: "Depending on project needs and style of my collaborators I will adapt accordingly. My preference is definitely the ES6 module pattern since this is what I’ve used extensively in React projects"
    },
    { question: "What's the difference between host objects and native objects?",
      answer: "Host objects as those which become available in certain environments (i.e. window, document etc in browser environments)\nNative objects are those which are ECMAScript language features, such as String, Function etc"
    },
    { question: "Difference between: function Person(){}, var person = Person(), and var person = new Person()?",
      answer: "the first declares a named function called Person\nthe second assigns the result of calling a function called Person to a variable called person\nthe third instantiates a new instance of a Person object"
    },
    { question: "What's the difference between .call and .apply?",
      answer: "Call takes a this value and then one or more comma separated values to pass to the function it is being called on\nApply also takes a this value and then an array of values to pass to the function is being called on"
    },
    { question: "Explain Function.prototype.bind.",
      answer: "Creates a new function whose this keyword is set to a provided value. This allows one function’s context to be accessed from another function. This is useful when used alongside event handlers, timeouts"
    },
    { question: "What's the difference between feature detection, feature inference, and using the UA string?",
      answer: "As the name implies, feature detection is used to detect environment support for a certain functionality, allowing for fallbacks in the case the browser or device doesn’t allow for certain functionality\nFeature inference is an assumption made where one feature is (not) supported then another feature will (not) be supported. These assumptions can lead to poor code due to browser inconsistencies and API updates\nThe User Agent (UA) string contains information about the current user’s device; computer model, browser version etc. Using this for conditional logic is another dodgy solution"
    },
    { question: "Explain Ajax in as much detail as possible.",
      answer: "Asynchronous Javascript and XML; using the Ajax model, updates to a page can be made w/o reloading the entire page. This allows sites to become more performant and responsive. While XML is in the name JSON is today more commonly used for packaging information."
    },
    { question: "What are the advantages and disadvantages of using Ajax?",
      answer: "Advantages:\nSince we can only load what is required at the current app state, load time can be reduced\nCan reduce number of connections to the server, since scripts only have to be retrieved once (depending on app requirements)\nSite response time is faster, increasing speed and performance\nCan provide real time information for purposes such as graphs and charts\nDisadvantages:\nHarder to build, maintain, and debug AJAX sites\nCauses issues with back/refresh button relating to returning to a particular area of application state (also consider bookmarks, linking etc)\nWon’t work for people who are offline or have JS disabled in their browser"
    },
    { question: "Explain how JSONP works (and how it's not really Ajax).",
      answer: "While both can be used to send data asynchronously, JSONP acts different on both the server and the client. JSONP doesn’t use the XMLHttpRequest method commonly used with Ajax, instead a script tag is created where the src is aimed at the target and an object is passed as a callback.\nJSONP is not a recommended approach due to inherent security concerns. CORS should instead be adopted where possible."
    },
    { question: "Have you ever used JavaScript templating? If so, what libraries have you used?",
      answer: "Yes, I have used JSX and briefly used Handlebars.js and Moustache.js"
    },
    { question: "Explain 'hoisting'.",
      answer: "Hoisting is concept for thinking how Javascript execution takes place once compiled by the browser. Variables and named functions declarations are ‘hoisted’, or moved up to the top of the scope it was declared in. For this reason, it is best to declare variables at the top of scripts."
    },
    { question: "Describe event bubbling.",
      answer: "In the case where a parent and child element both have the same event listener, event propagation describes element the event listener will handle first.\nEvent bubbling and event capturing describe two different methods of event propagation. Bubbling, which is default for most browsers, means the event is captured by the innermost element and then propagates outward.\nCapturing/trickling starts outward and works inward."
    },
    { question: "What's the difference between an 'attribute' and a 'property'?",
      answer: "A JS DOM node object contains properties, whereas an HTML element contains attributes. Both can be manipulated in JS, however, it is recommended to props over attrs when possible."
    },
    { question: "Why is extending built-in JavaScript objects not a good idea?",
      answer: "There are a few functional reasons; if the standard or browser updates to have a function w/ same name, yours will get overridden.\nOne exception might be when creating polyfills of modern functions for older browsers."
    },
    { question: "Difference between document load event and document DOMContentLoaded event?",
      answer: "DOMContentLoaded detects when the HTML has been fully loaded w/o waiting for page assets. The load event fires later once all resources to be loaded."
    },
    { question: "What is the difference between == and ===?",
      answer: "== will return true if both values are largely the same, regardless of data type i.e. “0.0” will match 0.0\n=== is strict and needs data to be exactly the same, including type, i.e. “0.0” will not match 0.0"
    },
    { question: "Explain the same-origin policy with regards to JavaScript.",
      answer: "The same-origin policy is a security feature which restricts how a site from one origin can interact with a resource of another origin. It ensures that resources are delivered from a singular origin (scheme/host/port) to prevent one malicious website accessing sensitive data of another site."
    },
    { question: "Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]",
      answer: "function duplicate(array){\nreturn array.concat(array);\n}\nconsole.log(duplicate([1,2,3,4,5]));"
    },
    { question: "Why is it called a Ternary operator, what does the word 'Ternary' indicate?",
      answer: "The ternary operator is referred to as such because it requires three parameters; the condition ? truthy_block : falsey block. The ‘ternary’ name infers three parameters, as opposed to unary (1 param) and binary (2 params)"
    },
    { question: "What is 'use strict';? what are the advantages and disadvantages to using it?",
      answer: "The ‘use strict’ is an opt-in declaration which changes both syntax and runtime behaviour of JS code.\nThrows previously silent errors\nFixes mistakes which prevent JS optimisations\nProhibits syntax likely defined in future ECMAScript versions\nVars have to be declared before they can be used, no creating global vars\nAdvantages:\nHelps identify and reduce sloppy code\nCan be more performant\nDisadvantages:\nBrowsers not supporting strict mode will interpret strict mode code differently to other browsers - need to use feature detection"
    },
    { question: "Create a for loop that iterates up to 100 while outputting 'fizz' at multiples of 3, 'buzz' at multiples of 5 and 'fizzbuzz' at multiples of 3 and 5",
      answer: "for (var i = 0; i < 100; i++) {\nif (i % 3 === 0) {\nconsole.log(i , 'fizz');\n}\nif (i % 5 === 0) {\nconsole.log(i , 'buzz');\n}\nif (i % 3 === 0 && i % 5\n=== 0 ) {\nconsole.log(i , 'fizzbuzz');\n}"
    },
    { question: "Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?",
      answer: "Polluting the global scope is bad practice because it can lead to reference conflicts where variables are updated or overridden unintentionally. They also make the code base harder to read and debug, as variables can ‘appear out of thin air’."
    },
    { question: "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
      answer: "You use the .load event to detect when the DOM and resources have been loaded (perhaps in order to manipulate the DOM and styles using JS)\nSince this fires after all resources are loaded (incl. styles and images), this event take a while to fire\nIf you’re just looking to manipulate the DOM, there is no need to wait for all resources to load (which is when the ‘load’ event fires), instead you can simply wait for ‘DOMContentLoaded’ to fire"
    },
    { question: "Explain what a single page app is and how to make one SEO-friendly.",
      answer: "A single web page app (SPA) is a site dynamically rewrites a single page as opposed to retrieving successive pages from the server; avoiding the need to reload or transfer to another page once the initial page has loaded.\nTo make these SEO friendly, things we can do include:\nAdd meta tags to index (incl title, description etc)\nUse tools such as Google Webmaster to verify site, request indexing and test crawling\nTest page speed etc using Google Insights"
    },
    { question: "What is the extent of your experience with Promises and/or their polyfills?",
      answer: "I have used Promises extensively when using Babel in Webpack which safely compiles down to ES5"
    },
    { question: "What are the pros and cons of using Promises instead of callbacks?",
      answer: "Promises are intended to simplify asynchronous JS previously achieved using callbacks.\nPros\nInstead of placing callbacks inside of callbacks, promises simply allow us to chain them inside a .then() function (much more readable and slightly less code).\nNumerous promises to be called synchronously can be called using the Promise.all()\nFailure at any point in a chain can be caught using the .catch() function.\nCons\nWhile largely supported by modern browsers, older browsers do not support promises directly (since it is an ES6 feature) - polyfills are available to overcome this."
    },
    { question: "What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?",
      answer: "I’ve seen a lot of talk about WebAssembly being on the frontier of web, where we can write code in other languages preferable for a solid codebase and compiling down to JS.\nAdvantages\nThis would allow developers to write in OOP languages and take advantage of features such as Classes, Types etc. Typescript is a good example of a language catering for these features.\nDisadvantages\nNeeds to be compiled down to ES5 for total browser support (requiring compilation time etc)\nContributing developers need to be familiar with the same languages for this to be feasible"
    },
    { question: "What tools and techniques do you use debugging JavaScript code?",
      answer: "Primarily, I use the Chrome CDT for client side and NodeJS CLI for server side debugging. I have also used Jest a fair amount for automated testing and played with Mocha and Jasmine in the past."
    },
    { question: "What language constructions do you use for iterating over object properties and array items?",
      answer: "You can use a number of approaches, such as loops (for..in, for..each, ), map, reduce, etc"
    },
    { question: "Explain the difference between mutable and immutable objects.",
      answer: "Mutable objects can be altered where as immutable objects (such as those which have been frozen) can’t be overridden, configured, have properties removed etc. Doing so will fail silently or cause a TypeError in strict mode."
    },
    { question: "What is an example of an immutable object in JavaScript?",
      answer: "One which has been frozen using Object.freeze();\ni.e. const obj2 = Object.freeze(obj1);"
    },
    { question: "What are the pros and cons of immutability?",
      answer: "Pros\nAn issue with mutable objects (and other complex data structs such as arrays) is where assigning obj2 to obj1, altering props on obj2 will also alter corresponding props on the original object.\nThis can lead to all sorts of undesirable outcomes. An immutable data structure avoids this by insuring that each object is a unique instance, often achieved using the Object.assign() function\nCons\nImmutable data structures can be slow/less performant\nData structure is often considerably more complex\nBest applied using dependencies such as ImmutableJS by FB"
    },
    { question: "How can you achieve immutability in your own code?",
      answer: "By freezing objects (Object.freeze()) which shouldn’t be mutated, creating unique instances of objects via Object.assign(), or employing an API such as ImmutableJS"
    },
    { question: "Explain the difference between synchronous and asynchronous functions.",
      answer: "Normal functions in JS are considered synchronous, are blocking as they halt program execution until the function returns. If the function process is a lengthy one, this can reduce performance dramatically.\nAsynchronous functions avoid this bottleneck by allowing program execution to continue to proceed while function takes place and then do something with the return once it finally completes (such as with API calls using callbacks or promises)"
    },
    { question: "What is event loop?",
      answer: "The event loop looks at the call stack and the task queue.\nIf the call stack is empty, the event loop will take the first item from the task queue and add it to the call stack."
    },
    { question: "What is the difference between call stack and task queue?",
      answer: "(In JS) A call stack is comprised of ‘frames’ produced by function calls. Each frames contain a function’s args and local vars.\nIf we call a function, it pushes a frame to the top of the stack, if we return a function it pops that frame off the top of the stack\nIf a function calls another function, it pushes another frame on the top of the stack.\nThere is only one call stack, hence JS being considered single threaded\n(In Browser) A task queue is comprised of messages with functions associated with them. These are added by web API’s such as async calls and timeouts etc\nThese are processed one at a time once the call stack has been cleared. Since they contain a function, each msg in the queue will add a frame to the call stack"
    },
    { question: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
      answer: "In the first case, foo is the name of a named function\nIn the second case, foo is assigned the return of an anonymous function"
    },
    { question: "What are the differences between variables created using let, var or const?",
      answer: "Let and const are block scoped in the sense that they can’t be accessed outside of the scope they are declared in. i.e. a let/const inside of a for loop can’t be written to outside of that loop\nConst can be written to after it has been declared\nLet can be written to after it has been declared\nVar is not block scoped and can be accessed outside of scope. Vars can also be rewritten (unless made immutable)."
    },
    { question: "What are the differences between ES6 class and ES5 function constructors?",
      answer: "While technically a function, the ES6 class looks to mimic those commonly found in OOP languages\nClasses aren’t hoisted (new to declare before referencing)\nHas a constructor() function for initializing the class objects, with the super() function to call the constructor of the parent/super class\nClass declarations and bodies are written in strict mode\nHas static methods to be called w/o instantiation\nCan be subclassed using the extends keyword\nAn ES5 factory function\nFactory functions are hoisted\nExplicitly references the prototype chain when assigning methods\nFactory function props are assigned using the ‘this’ keyword"
    },
    { question: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
      answer: "The arrow function does contain its own this value, making it more appropriate for method functions and cannot be used as constructors\nES5: function foo (){ console.log(‘Hi’) }\nES6: () => { console.log(‘Hi’) };"
    },
    { question: "What advantage is there for using the arrow syntax for a method in a constructor?",
      answer: "ES5 functions have their own ‘this’ object which, when used as methods inside function constructors, can create reference issues, leading to workarounds such as that = this."
    },
    { question: "What is the definition of a higher-order function?",
      answer: "A higher order function is a function which operates on another function; either by taking them as an argument or by returning them.\nWe use them to abstract over actions, not just values; allowing us to create new functions, change functions, or create new types of control flow based on params."
    },
    { question: "Can you give an example for destructuring an object or an array?",
      answer: "Array: 	const arr = ['foo', 'bar', 'baz'];\nconst [foo, bar, baz] = arr;\nObject: const obj = { foo: 'foo', bar: 'bar', baz: 'baz' };\nconst {foo, bar, baz} = obj;"
    },
    { question: "ES6 Template Literals offer a lot of flexibility in generating strings, can you give an example?",
      answer: "const foo = 'bar';\nconst str = `insert string here: ${foo}`;"
    },
    { question: "Can you give an example of a curry function and why this syntax offers an advantage?",
      answer: "A curried function breaks out the parameters required by a function into a number of functions returned one after another. This provides a series of functions which are flexible and easier to read.\nconst adder = function(factor){\nreturn function(amount){\nreturn factor + amount;\n}\n}\nconst add10 = adder(10);\nconsole.log(add10(23));"
    },
    { question: "What are the benefits of using spread syntax and how is it different from rest syntax?",
      answer: "The spread syntax allows us to assign an iteritatable’s content to another context, such as to function args, an array, or obj, simply by using the spread operator (...).\nThis is much quicker than other methods such as looping through object keys etc. You can also easily override props during assignment by defining them after the spread operator statement.\nThe rest parameter allows us represent an indefinite number of args as an array. This also uses the spread operator."
    },
    { question: "How can you share code between files?",
      answer: "Bad practice is to place variables and functions within the global scope.\nBest practice is to use a modular approach which, allows us to export variables and functions from one script and import them into another script."
    },
    { question: "Why you might want to create static class members?",
      answer: "Static members are those which can’t be accessed through instantiation and instead have to be used by direct reference of a class. These are often used for utility methods associated with a class"
    }
  ];

  return jsQuestions;
});
