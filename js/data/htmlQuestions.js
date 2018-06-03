define([], function () {
  const htmlQuestions = [
    { question: "What does a doctype do?",
      answer: "The doctype is used to specify the type of XML document being interpreted.\nIn an HTML context, (while this is somewhat of a legacy requirement) this helps ensure browsers interpret the HTML document according to relevant standards"
    },
    { question: "How do you serve a page with content in multiple languages?",
      answer: "First by setting the primary lang attribute in the html declaration of the page. Elements requiring translation, provide elements for each translation by assigning a lang attr\nAlternatively frameworks and CMS’ have different i8n l10 approaches but this goes outside of the scope of HTML"
    },
    { question: "What kind of things must you be wary of when design or developing for multilingual sites?",
      answer: "Language direction - dir attr can be set to indicate language direction\nFont and language script character compatibility - :lang() selector can be used to do language-specific styles ( to say, change font or sizes)\nInterpretation goes beyond language; i.e. different cultures have different interpretations for design elements such as colour and iconography."
    },
    { question: "What are data- attributes good for?",
      answer: "Data attributes are useful for housing custom data within within HTML elements; these can be accessed via JS etc"
    },
    { question: "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
      answer: "meow"// TODO:
    },
    { question: "Describe the difference between a cookie, sessionStorage and localStorage.",
      answer: "An HTTP cookie is a small piece of data sent from the server and often returned on the next request - can be used, for example, to tell if a user is still logged in\nSession storage allows for key-value pairs of data to be stored on the browser for as long as the active window is open\nLocal storage allows key-value pairs to be stored in a users browser until the cache size is exceeded or the cache is cleared"
    },
    { question: "Describe the difference between <script>, <script async> and <script defer>.",
      answer: "<script> are retrieved and executed immediately before the rest of the page has been parsed\n<script async> indicates the browser should execute this script asynchronously\n<script defer> indicates that the rest of the document should be parsed before executing this script"
    },
    { question: "Why is it generally a good idea to position CSS <link>s between <head></head> and JS <script>s just before </body>? Do you know any exceptions?",
      answer: "Positioning <link> tags in the head of the document allows the CSS to be retrieved and parsed early in the page loading process, helping prevent FOUC\nPlacing <script> tags in the body helps prevent scripts executing before the DOM has been rendered\nExceptions to this are libraries, which are often placed in the head since they generally won’t execute on load"
    },
    { question: "What is progressive rendering?",
      answer: "As the name implies these techniques are used to progressively render page content as required often to deliver content as quickly as possible.\nSuch techniques include lazy loading of images (loading only image present in the viewport) and prioritize visible content (content viewable on landing and lowing the rest once the dom is ready)"
    },
    { question: "Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.",
      answer: "A srcset attribute can be used to deliver different images or different sized versions of the same image depending on device screen sizes (i.e. larger imgs for retina displays vs smaller imgs for mobile devices)\nUsing the img size attribute we can set the media condition for a certain image to be displayed"
    },
    { question: "Have you used different HTML templating languages before?",
      answer: "Yep, I have primarily used JSX when working with React. I have also used Handlebars and Moustache."
    }
  ];

  return htmlQuestions;
});
