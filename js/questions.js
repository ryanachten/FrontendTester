const questionObj = {
  general : [
    { question: "What did you learn yesterday / this week?",
      answer: "This week I have started learning Backbone.js as a means of furthering my frontend framework knowledge. I will later apply this by refactoring a previous project of mine."
    },
    { question: "What excites or interests you about coding?",
      answer: "I like the fact that it is a field which is constantly evolving allows for endless learning and challenges as well as creative expression."
    },
    { question: "What is a recent technical challenge you experienced and how did you solve it?",
      answer: "My personal site was taking ages to load. To find out what was delaying the load process, I popped open Chrome’s network tool and, as I suspected, it was bloated images taking ages to be retrieved. I then used an online compression tool called optimizer to compress these by around 60%, reducing the load time dramatically."
    },
    { question: "When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?",
      answer: "A useful tool for getting ideas on where to start is the Google Pagespeed Insights tool, which provides a desktop and mobile rating for websites as well as useful suggestions\nIf using Webpack, use a production-ready src maps for production, vs the bloated version for development.\nOnline compression tools such as SVGOMG and Optimizer for jpg and png to reduce load time of my assets.\nAll else fails, employ compression algorithms on the build process or server, such as gzip and/or brotli"
    },
    { question: "When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?",
      answer: "Getting SEO working for SPA’s can be a pain; using Google Webmaster, you can aid your site’s indexability using verification tokens, requests for crawlers\nAlso having clear, human-readable meta descriptions and titles w/o any repeating keywords helps these crawlers understand your site"
    }
  ],
  html : [
    { question: "What does a doctype do?",
      answer: "meow"
    }
  ],
  css : [
    { question: "What is CSS selector specificity and how does it work?",
      answer: "meow"
    }
  ],
  javascript : [
    { question: "Explain event delegation",
      answer: "meow"
    }
  ],
  testing : [
    { question: "What are some advantages / disadvantages to testing your code?",
      answer: "meow"
    }
  ],
  performance : [
    { question: "What tools would you use to find a performance bug in your code?",
      answer: "meow"
    }
  ],
  network : [
    { question: "Traditionally, why has it been better to serve site assets from multiple domains?",
      answer: "meow"
    }
  ],
  coding : [
    { question: "What is the value of foo? var foo = 10 + '20';",
      answer: "meow"
    }
  ],
  fun : [
    { question: "What's a cool project that you've recently worked on?",
      answer: "meow"
    }
  ]
}
