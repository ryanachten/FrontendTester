define([], function () {
  const generalQuestions = [
    { question: "What did you learn yesterday / this week?",
      answer: "This week I have started learning Backbone.js as a means of furthering my frontend framework knowledge."
    },
    { question: "What excites or interests you about coding?",
      answer: "I love the fact that it is a field which is constantly evolving and one which allows for endless learning as well as creative expression."
    },
    { question: "What is a recent technical challenge you experienced and how did you solve it?",
      answer: "My personal site was taking ages to load. I compressed site assets further and added gzip and brotli compression in the build process to speed things up."
    },
    { question: "When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?",
      answer: "A useful place to start is Google Pagespeed Insights, which provides a desktop and mobile rating for websites as well as useful suggestions\nBundle and minify JS/CSS via tools such as Webpack and Sass. Compress image assets safely using tools such as SVGOMG and Optimizer for jpg and png.\nEmploy CDN’s to enhance the number of concurrent downloads for the site load\nEmploy compression algorithms on the build process or server, such as gzip and/or brotli"
    },
    { question: "When building a new web site or maintaining one, can you explain some techniques you have used to increase performance?",
      answer: "Getting SEO working for SPA’s can be a pain; using Google Webmaster, you can aid your site’s indexability using verification tokens, requests for crawlers\nAlso having clear, human-readable meta descriptions and titles w/o any repeating keywords helps these crawlers understand your site"
    },
    {
      question: "Can you describe some SEO best practices or techniques you have used lately?",
      answer: "Getting SEO working for SPA’s can be a pain; using Google Webmaster, I have increased site indexability using verification tokens and requests for crawlers\nAlso having clear, human-readable meta descriptions and titles w/o any repeating keywords helps these crawlers understand your site"
    },
    {
      question: "Can you explain any common techniques or recent issues solved in regards to front-end security?",
      answer: "To avoid issues such as XSS (cross-site scripting) attacks, escaping user input and request parameters is essential.\nA common issue with any framework, notably Wordpress, is not keeping the framework and dependencies up to date to take advantage of the latest security fixes and features."
    },
    {
      question: "What actions have you personally taken on recent projects to increase maintainability of your code?",
      answer: "The digital publishing platform I built recently looks to be further developed after my involvement. Therefore I was careful to document extensively within the source code and within the project’s readme and wiki. This documentation had to serve both developers and non-developer admins and users."
    },
    {
      question: "Talk about your preferred development environment.",
      answer: "Atom text editor\nNode web server\nWebpack bundler with Babel and React environments\nGit for version control\nChrome browser"
    },
    {
      question: "Which version control systems are you familiar with?",
      answer: "Git alongside services such as GitHub and BitBucket"
    },
    {
      question: "Can you describe your workflow when you create a web page?",
      answer: "Plan, research and propose tailored system architecture to clients\nOnce architecture is signed off, will produce wireframes (and design elements such as branding, colour system as required) in Sketch using mobile, tablet and desktop sizes.\nMotion/3D elements may be mocked up in C4D and branding in Illustrator. Get sign off from clients.\nProduce MVP of site functionality, using sans-styling / basic styling - get sign off\nProduce refined version of site, test and debug - get sign off.\nLaunch site."
    },
    {
      question: "If you have 5 different stylesheets, how would you best integrate them into the site?",
      answer: "If adopting a preprocessor is an option, I would adopt SCSS/Sass and import them into one single scss file before exporting as minified CSS.\nIf this is not an option, we can use the standard <link> tag to import them, ordered by priority to cascade properly."
    },
    {
      question: "Can you describe the difference between progressive enhancement and graceful degradation?",
      answer: "Progressive enhancement is where we start with a baseline of features accessible to most browsers and then adding enhanced features for more capable browsers.\nThe opposite approach is taken with graceful degradation, where full features are aimed at capable browsers, which are then substituted for less capable browsers, often by means of polyfills or fallbacks."
    },
    {
      question: "How would you optimize a website's assets/resources?",
      answer: "Three approaches for this include, file concatenation, minification and caching\nConcatenation is where files are merged or bundled into one resource to reduce the number of http requests required. Tools such as Sass for CSS and bundlers such as Webpack for JS are useful here.\nMinification reduces the amount of characters in a file w/o altering its functionality to decrease file size. This is important in concatenated files which are often quite large. The same tools for bundling often have minification features.\nCaching of files can be achieved on a server and/or client. On the server, a file is kept ready to be sent straight away. On the client, a file is kept on the browser to avoid having to be downloaded again."
    },
    {
      question: "How many resources will a browser download from a given domain at a time? What are the exceptions?",
      answer: "Modern browsers can concurrently download 6-8 resources, however, older versions of IE can only do 2 at a time\nWhen we use subdomains or a CDN, we can increase the concurrency level of the download."
    },
    {
      question: "Name 3 ways to decrease page load (perceived or actual load time).",
      answer: "First step is to minimize the number of http requests needed to be made using file concatenation.\nCompression of assets and resources can be effective here. Compression of images and minification of src files. Using gzip/brotli compression on the server or build process, we can compress our overall site size substantially.\nThe use of spinners and load progress bars can reduce the perceived load time of a site, increasing user experience"
    },
    {
      question: "If you jumped on a project and they used tabs and you used spaces, what would you do?",
      answer: "Well, I would use tabs because that’s the convention of the project. A tool such as EditorConfig can be used to help regulate project conventions."
    },
    {
      question: "Describe how you would create a simple slideshow page.",
      answer: "Each slide has a div with the class ‘slide--page’. The default page would have an additional tag, ‘slide--page__active’.\n‘slide--page’ class has width and height set to 100% and display set to ‘none’\n‘slide--page__active’ would have display set to block.\nEach of the divs are housed in an array using getElementsByClass(‘slide--page’)\nOn click a simple event listener would increment through the array adding the active class to the new active screen and removing it from the former. Once it gets to the end of the div array, the index would be reset to 0"
    },
    {
      question: "If you could master one technology this year, what would it be?",
      answer: "I’m looking at exploring Python this year as I am excited to explore the possibilities of AI with regards to visual experimentation."
    },
    {
      question: "Explain the importance of standards and standards bodies.",
      answer: "Standards help us consider the relevance, use and context for new technologies, This is especially important when looking to achieve adoption and consistency in terms of implementation by vendors, such as browser developers, and site developers."
    },
    {
      question: "What is Flash of Unstyled Content? How do you avoid FOUC?",
      answer: "A flash of unstyled content occurs when the browser renders the page before the CSS has been loaded. This occurs when other content is loaded before styles or asynchronously. There are JS solutions/hacks for preventing this, however the best solution is simply to place styles high in the head so they are loaded early."
    },
    {
      question: "Explain what ARIA and screenreaders are, and how to make a website accessible.",
      answer: "Screen readers are an assistive technology which uses text-to-speech to read out displayed content to the visually-impaired.\nAccessible Rich Internet Applications is a set of attributes and best practices to help increase accessibility across the web. We can use specific aria elements and attributes to better contextualise or explain elements of a website to those using visual aids such as screen readers."
    },
    {
      question: "Explain some of the pros and cons for CSS animations versus JavaScript animations.",
      answer: "CSS is faster and more performant on the browser since they use the GPU and don’t require JS event loops. However, they are less programmatic since it relies on CSS lang, inconsistent support on older browsers\nJS is slower when manipulating and rendering to the DOM, however we can do cooler stuff through libraries such as Three.js and p5.js"
    },
    {
      question: "What does CORS stand for and what issue does it address?",
      answer: "Cross-Origin Resource Sharing uses HTTP headers to dictate which resources are acceptable from a server at a different origin. This helps prevent a script from one site accessing sensitive information through another site’s DOM"
    }
  ];

  return generalQuestions;
});
