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
    },
    {
      question: "Can you describe some SEO best practices or techniques you have used lately?",
      answer: "Getting SEO working for SPA’s can be a pain; using Google Webmaster, you can aid your site’s indexability using verification tokens, requests for crawlers\nAlso having clear, human-readable meta descriptions and titles w/o any repeating keywords helps these crawlers understand your site"
    },
    {
      question: "Can you explain any common techniques or recent issues solved in regards to front-end security?",
      answer: "I was developing a digital writing/publishing platform on top of WordPress recently where this became an obvious factor. My approach to this was first to school up on WP security best practices. I was then able to validate and sanitise user input before writing to the database as well as escape database content before rendering it to the client."
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
      answer: "I have only really used git alongside hosts such as GitHub and BitBucket"
    },
    {
      question: "Can you describe your workflow when you create a web page?",
      answer: "Plan, research and propose tailored system architecture to clients\nOnce architecture is signed off, will produce wireframes (and design elements such as branding, colour system as required) in Sketch using mobile, tablet and desktop sizes.\nMotion/3D elements may be mocked up in C4D and branding in Illustrator. Get sign off from clients.\nProduce MVP of site functionality, using sans-styling / basic styling - get sign off\nProduce refined version of site, test and debug - get sign off.\nLaunch site."
    },
    {
      question: "If you have 5 different stylesheets, how would you best integrate them into the site?",
      answer: "Well if by ‘integrate’, you mean simply import them into the site, you can use the standard <link> tag to import them, ordered by priority to cascade properly.\nHowever, if by ‘integrate’ you mean combine them performantly, we could refactor them as SCSS/Sass and import them into one single scss file before exporting as minified CSS."
    },
    {
      question: "Can you describe the difference between progressive enhancement and graceful degradation?",
      answer: "Progressive enhancement is basically where we start with a baseline of features accessible to most browsers and then adding enhanced features for more capable browsers\nThe opposite approach is taken with graceful degradation, where full features are produced aimed at capable browsers, which are then substituted for less capable browsers, often by means of polyfills or fallbacks."
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
      answer: "I’m looking at exploring Python this year as I am exciting to explore the possibilities of AI with regards to visual experimentation. Additionally, I am already looking at GLSL to achieve things I have been somewhat limited using plain JS libraries (i.e. fractals etc)."
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
      answer: "Screen readers are an assistive technology which uses speech-to-text to read out displayed content to the visually-impaired.\nAccessible Rich Internet Applications is a set of attributes and best practices to help increase accessibility across the web. We can use specific aria elements and attributes to better contextualise or explain elements of a website to those using visual aids such as screen readers."
    },
    {
      question: "Explain some of the pros and cons for CSS animations versus JavaScript animations.",
      answer: "CSS is faster and more performant on the browser since they use the GPU and don’t require JS event loops. However ,they are less programmatic since it relies on CSS lang, inconsistent support on older browsers\nJS is slower when manipulating and rendering to the DOM, however we can do cooler stuff through libraries such as Three.js and p5.js"
    },
    {
      question: "What does CORS stand for and what issue does it address?",
      answer: "Cross-Origin Resource Sharing helps avoid malicious attacks on sites and users by ensuring that resources come from accepted points of origin"
    }
  ],
  html : [
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
  ],
  css : [
    { question: "What is CSS selector specificity and how does it work?",
      answer: "CSS selector specificity refers to the order in which css targets certain elements on a page for styling.\nAt the bottom of this order is are tag selections, followed by class and trumped by id selections. When the selectors have equal weight in specificity, it comes down to their order in the CSS, where those lower in the style sheet will be used (hence the cascading nature of CSS)"
    },
    { question: "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
      answer: "Resetting refers to removing default browser styles\nNormalising refers to overriding default browser styles to ensure a consistent base style across browsers\nI would generally go with normalisation as it provides a better basis for consistent appearance across browsers and devices."
    },
    { question: "Describe Floats and how they work.",
      answer: "Floats define where an element should be positioned within its container. The element is removed from the normal flow of a document but still remains part of it"
    },
    { question: "Describe z-index and how stacking context is formed.",
      answer: "Z-index describes the order in which elements are layered on top of one another. Typically the stacking context is created in the root element of the doc. This order can be manipulated by assigning z-index larger than 0 to an element. Additional stacking contexts can be created where specific properties require it (i.e. opacity)"
    },
    { question: "Describe BFC(Block Formatting Context) and how it works.",
      answer: "BFC occurs when floats contain and restrain to help dictate the positioning of elements on a page"
    },
    { question: "What are the various clearing techniques and which is appropriate for what context?",
      answer: "The clear property can be used with floating elements to prevent elements sitting to the left, right or both side of the element in question\nThe clearfix technique is often used when there is a need to automatically clear an element’s child elements (to say, stack elements horizontally or combat the zero height container issue)"
    },
    { question: "How would you approach fixing browser-specific styling issues?",
      answer: "Check CSS feature specifications and caniuse for different browser implementations of the feature. Use vendor prefixes where applicable or polyfills if required."
    },
    { question: "How do you serve your pages for feature-constrained browsers? What techniques/processes do you use?",
      answer: "I believe there are two main approaches for this depending on user needs:\nIf feature constrained browsers are common amongst key users, then prioritising their capabilities (and lack thereof) is paramount\nIf feature constrained browsers are used only by the minority, then proceeding with advanced features is OK as long as there are polyfills for the features in constrained browsers"
    },
    { question: "What are the different ways to visually hide content (and make it available only for screen readers)?",
      answer: "A common approach is to position the element in question off the page using absolute and a left or right measurement"
    },
    { question: "Have you ever used a grid system, and if so, what do you prefer?",
      answer: "I have predominantly used Foundation’s grid system and played with Bootstrap in the past. I prefer the control available in pure css systems like Flexbox"
    },
    { question: "Have you used or implemented media queries or mobile specific layouts/CSS?",
      answer: "Absolutely. When a fluid grid does not cater for mobile adequately, I will definitely use media queries"
    },
    { question: "Are you familiar with styling SVG?",
      answer: "I usually create and style my SVG assets in Illustrator and Sketch before optimising in SVGOmg. I have used SVG filters in the past too."
    },
    { question: "Can you give an example of an @media property other than screen?",
      answer: "I believe you can use it to target print and speech styles too"
    },
    { question: "What are some of the 'gotchas' for writing efficient CSS?",
      answer: "Specificity helps aid performance; i.e. reduce wildcards and other selectors which apply to large numbers of tags\nAvoid unused and redundant code\nAs with any other code, keep it DRY (use of mixins and variables with SCSS can be useful here)"
    },
    { question: "What are the advantages/disadvantages of using CSS preprocessors?",
      answer: "Preprocessors are great in the sense that they allow for modularity in styles, enabling easier maintainability, and often provide minification which is great from a performance standpoint. Variables, mixins etc are awesome features too. In general, css becomes moe programmatic.\nDisadvantages are there is sometimes a delay when compiling styles for larger projects. Larger projects can also produce bloated css files (even w/ minification) - these can be broken into multiple docs though."
    },
    { question: "Describe what you like and dislike about the CSS preprocessors you have used.",
      answer: "I predominantly use SCSS via the Sass CLI as a I prefer the syntax slightly to Sass. I have used Sass in the past and I have looked into Less."
    },
    { question: "How would you implement a web design comp that uses non-standard fonts?",
      answer: "If the font is one hosted via Google Fonts or another host, these can be simply linked or imported via the CDN\nHowever, it is a font provided locally, these can be imported in using the @font-face rule in CSS, providing the url with font file type fallbacks"
    },
    { question: "Explain how a browser determines what elements match a CSS selector.",
      answer: "CSS selectors are matched by browsers right to left (bottom up parsing), finding the children and then checking the parents against the selector rule looking for elements which don’t match the rule."
    },
    { question: "Describe pseudo-elements and discuss what they are used for.",
      answer: "Pseudo elements allow developers to manipulate styles of a specific part of an element (i.e. first line, letter etc)"
    },
    { question: "Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.",
      answer: "The box model describes how the browser is supposed to interpret element sizing with respect to borders, margins, padding and content.\nYou can change the box model through the CSS box sizing attribute. When set to content box, width and height refer to the content area size (margin/padding/border non-inclusive). When set to border-box, the size of an element includes its borders, margins, padding and content."
    },
    { question: "What does * { box-sizing: border-box; } do? What are its advantages?",
      answer: "This CSS rule overrides the default box sizing setting from content-box to border-box. Border-box can be useful as it arguably allows for easier alignment of elements, especially in a parent/child context"
    },
    { question: "What is the CSS display property and can you give a few examples of its use?",
      answer: "The display property specifies the type of rendering box to be used when displaying an element. This can affect the size, position and visibility of the element in question, by setting to say, Block, as opposed to none"
    },
    { question: "What's the difference between inline and inline-block?",
      answer: "An inline element sits along the same baseline as other inline elements, cannot have height and width defined (defined by content size), repsects only left and right margins\nAn inline block element also sits along the baseline with other inline elements, however can have height and width defined and respects all margins"
    },
    { question: "What's the difference between a relative, fixed, absolute and statically positioned element?",
      answer: "Relative positioning right/left/top/bottom units act as an offset from its original position\nAbsolute places the element outside of the fluid and allows the element to be translated to the right/left/top/bottom of their parent element\nFixed places the element outside of the fluid grid altogether, allowing it to be placed independently statically relative to viewport"
    },
    { question: "What existing CSS frameworks have you used locally, or in production? How would you change/improve them?",
      answer: "I have used Foundation by Zurb a lot. I generally like the base styles, however, the grid system irks me - it doesn’t account well for, from my experience, retina displays"
    },
    { question: "Have you played around with the new CSS Flexbox or Grid specs?",
      answer: "I have used Flexbox extensively in a number of projects. I looked into CSS Grid when it came out last year but wasn’t widely supported. I notice support has now improved, so would consider using it these days"
    },
    { question: "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?",
      answer: "Making a website responsive implies that the website already exists in a non-responsive manner and requires styles to be created to account for other screen sizes.\nWhen developing mobile-first, we begin with the lower screen real estate and performance that these devices have to offer. Other devices and screen sizes are developed subsequently. User experience for mobile devices here is paramount."
    },
    { question: "Have you ever worked with retina graphics? If so, when and what techniques did you use?",
      answer: "No, but if I did I would create different versions of the same image, cropped and scaled for different breakpoints (incl. retina screen sizes)\nusing srcset we can target different screen sizes and link to appropriate images for those sizes. In addition to screen sizes, we can target resolutions if necessary using dpi and pixel ratios"
    },
    { question: "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
      answer: "If the element needs to be statically positioned, then absolute + tbrl is fine, however, if the element needs to be animated then using translate is a more performant solution as it has a lower paint time because it sits on the GPU."
    }
  ],
  javascript : [
    { question: "Explain event delegation",
      answer: "Instead of attaching an event to numerous similar nodes, an event is attached to the parent of the nodes."
    },
    { question: "Explain how this works in JavaScript",
      answer: "Using the element.matches API we can confirm that the correct target as the source of the event."
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
      answer: "Foreach simply loops over each item in an array, providing access to the value of each index.\nForeach may be more appropriate where you’re not trying to save new data but instead do something with the data\nMap returns a new array based on the results of calling a function on each array element. \nMap is more appropriate when manipulating and saving data from an array. Since it returns a new array, can be chained with filter() etc. Map is supposedly much faster."
    },
    { question: "What's a typical use case for anonymous functions?",
      answer: "Anonymous functions are not hoisted to the top of the script and can therefore not be executed before they appear in the script. Anonymous functions are also expressions not declarations, and as such can be assigned to variables, properties etc making them more flexible than named functions. They also used in IIFE’s"
    },
    { question: "How do you organize your code? (module pattern, classical inheritance?)",
      answer: "Depending on project needs and style of my collaborators I will adapt accordingly. My preference is definitely module pattern since this is what I have used in React and Node projects"
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
      answer: "Creates a new function whose this keyword is set to a provided value. This allows one function’s context to be accessed from another function. This is useful when used alongside event handlers, timeouts (and all sorts of React scenarios)"
    },
    { question: "What's the difference between feature detection, feature inference, and using the UA string?",
      answer: "As the name implies, feature detection is used to detect environment support for a certain functionality, allowing for fallbacks in the case the browser or device doesn’t allow for certain functionality\nFeature inference is an assumption made where one feature is (not) supported then another feature will (not) be supported. These assumptions can lead to poor code due to browser inconsistencies and API updates\nThe User Agent (UA) string contains information about the current user’s device; computer model, browser version etc. Using this for conditional logic is another dodgy solution"
    },
    { question: "Explain Ajax in as much detail as possible.",
      answer: "Asynchronous Javascript and XML; using the Ajax model, updates to a page can be made w/o reloading the entire page. This allows sites to become more performant and responsive. While XML is in the name JSON is today more commonly used for packaging information."
    },
    { question: "What are the advantages and disadvantages of using Ajax?",
      answer: "Advantages:\nSince we can only load what is required at the current app state, load time can be reduced\nCan reduce number of connections to the server, since scripts only have to be retrieved once (depending on app requirements)\nSite response time is faster, increasing speed and performance\nCan provide real time information for purposes such as graphs and charts\nDisadvantages:\nHarder to build, maintain, and debug AJAX sites\nCauses issues with back/refresh button relating to returning to a particular area of application state (also consider bookmarks, linking etc)\nWon’t work for people who are offline or have JS disabled in their browser\nCan dramatically increase number of requests to server (depending on app requirements)"
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
      answer: "Generally bad practice. There are a few functional reasons, i.e. if the standard or browser updates to have a function w/ same name, yours will get overridden. One exception might be to create polyfills of modern functions for older browsers."
    },
    { question: "Difference between document load event and document DOMContentLoaded event?",
      answer: "DOMContentLoaded detects when the HTML has been fully loaded w/o waiting for the page’s styles, images and other resources. The load event fires later once all resources to be loaded."
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
      answer: "It’s best to leave the global scope unpolluted as global variables are generally bad practice. Some reasons for this are that they can lead to reference conflicts where variables are updated or overridden unintentionally. They also make the code base harder to read and debug, as variables can ‘appear out of thin air’."
    },
    { question: "Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?",
      answer: "You use the .load event to detect when the DOM and resources have been loaded. This might be done so that you can manipulate the DOM and styles using JS.\nSince this fires after all resources are loaded (incl. styles and images), this event take a while to fire\nIf you’re just looking to manipulate the DOM, there is no need to wait for all resources to load (which is when the ‘load’ event fires), instead you can simply wait for ‘DOMContentLoaded’ to fire"
    },
    { question: "Explain what a single page app is and how to make one SEO-friendly.",
      answer: "A single web page app (SPA) is a site which generally only has one HTML file, the other pages being rendered using JS (or another language). Client-side rendered sites using libraries and frameworks such as React and Vue are common approaches for this.\nTo make these SEO friendly, things we can do include:\nAdd meta tags to index (incl title, description etc)\nUse tools such as Google Webmaster to verify site, request indexing and test crawling\nTest page speed etc using Google Insights"
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
      answer: "Primarily, I use the Chrome CDT for client side and NodeJS CLI for server side debugging. I have also used Jest a fair amount for automated testing and played with Jasmine in the past."
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
      answer: "Normal functions in JS are considered synchronous, as they are non-blocking and allow the rest of the code to execute while the function completes\nAsynchronous functions, such as callbacks and promises, are blocking in the sense that the can prevent other code from executing until they complete. This is useful when retrieving data from API’s or awaiting user input"
    },
    { question: "What is event loop?",
      answer: "The event loop looks at the call stack and the task queue.\nIf the call stack is empty, the event loop will take the first item from the task queue and add it to the call stack."
    },
    { question: "What is the difference between call stack and task queue?",
      answer: "(In JS) A call stack is comprised of ‘frames’ produced by function calls. Each frames contain a function’s args and local vars.\nIf we call a function, it pushes a frame to the top of the stack, if we return a function it pops that frame off the top of the stack\nIf a function calls another function, it pushes another frame on the top of the stack.\nThere is only one call stack, hence JS being considered single threaded\n(In Browser) A task queue is comprised of messages with functions associated with them. These are added by web apis such as async calls and timeouts etc\nThese are processed one at a time once the call stack has been cleared. Since they contain a function, each msg in the queue will add a frame to the call stack"
    },
    { question: "Explain the differences on the usage of foo between function foo() {} and var foo = function() {}",
      answer: "In the first case, foo is the name of a named function\nIn the second case, foo is assigned the return of an anonymous function"
    },
    { question: "What are the differences between variables created using let, var or const?",
      answer: "Let and const are block scoped in the sense that they can’t be accessed outside of the scope they are declared in. i.e. a let/const inside of a for loop can’t be written to outside of that loop\nConst can be written to after it has been declared\nLet can be written to after it has been declared\nVar is not block scoped and can be accessed outside of scope. Vars can also be rewritten (unless made immutable)."
    },
    { question: "What are the differences between ES6 class and ES5 function constructors?",
      answer: "While technically a function, the ES6 class looks to mimic those commonly found in OOP languages\nClasses aren’t hoisted (new to declare before referencing)\nHas a constructor() function for initializing the class objects, with the super() function to call the constructor of the parent/super class\nClass declarations and bodies are written in strict mode\nHas static methods to be called w/o instantiation\nCan be subclassed using the extends keyword\nAn ES5 factory function\nES6 functions are hoisted\nExplicitly references the prototype chain when assigning methods\nFactory function props are assigned using the ‘this’ keyword"
    },
    { question: "Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?",
      answer: "The arrow function does contain its own this value, making it more appropriate for method functions and cannot be used as constructors\nES5: function foo (){ console.log(‘Hi’) }\nES6: () => { console.log(‘Hi’) };"
    },
    { question: "What advantage is there for using the arrow syntax for a method in a constructor?",
      answer: "ES5 functions have their own this object, which used as methods inside function constructors can create reference issues, leading to workarounds such as that = this."
    },
    { question: "What is the definition of a higher-order function?",
      answer: "A higher order function is a function which operates on another function; either by taking them as an argument or by returning them.\nThey allow us to abstract over actions, not just values; allowing us to create new functions, change functions, or create new types of control flow based on params."
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
      answer: "The spread syntax allows us to assign an iteritatable’s content to another context, such as to function args or array and obj assignment simply by using the spread operator (...).\nThis is much quicker than other methods such as looping through object keys etc. You can also easily override props during assignment by defining them after the spread operator statement.\nThe rest parameter allows us represent an indefinite number of args as an array. This also uses the spread operator."
    },
    { question: "How can you share code between files?",
      answer: "Bad practice is to place variables and functions within the global scope.\nBest practice is to use a modular approach which, depending on the environment, allows us to export variables and functions from one script and require them or use the ES6 import statement to access them in another script."
    },
    { question: "Why you might want to create static class members?",
      answer: "Static members are those which can’t be accessed through instantiation and instead have to be used by direct reference of a class. These are often used for utility methods associated with a class"
    }
  ],
  testing : [
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
  ],
  performance : [
    { question: "What tools would you use to find a performance bug in your code?",
      answer: "Main tool would be CDT’s Performance tab to see which functions are causing extensive parsing, evaluation, layout, painting or composting"
    },
    { question: "What are some ways you may improve your website's scrolling performance?",
      answer: "When scrolling, the browser figures out which pixels are new and need to be rendered; therefore you ideally want to minimise how much painting needs to occur as you scroll. There are some key factors to achieving this:\nReduce expensive styles (such as drop shadows)\nReduce reflows and repaints (such as offsetTop)\nLoading visual updates into scroll events (combine w/ requestAnimationFrame to optimise w/ browser)"
    },
    { question: "Explain the difference between layout, painting and compositing.",
      answer: "Layout calculates out how much space an element needs to take up on the screen and how it affects others (especially in parent/child relationships)\nPainting is the browser figures out what pixels need to be rendered to the screen. These pixels are often drawn onto multiple layers for compositing.\nCompositing determines the order in which these paint layers should appear"
    }
  ],
  network : [
    { question: "Traditionally, why has it been better to serve site assets from multiple domains?",
      answer: "Allows for parallelisation of server requests; instead of awaiting the request/response for each resource from one server, multiple request/responses can be performed simultaneously by using a number of domains\nWith modern browsers, up to 6 resources can be downloaded from one domain concurrently, so by employing more domains (such as CDN), this concurrent limit can be increased"
    },
    { question: "Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.",
      answer: "Browser IP lookup; checking the browser cache, then OS cache, then router cache for the site’s DNS records\nOnce the browser has the IP address, it sends a GET request to the web server\nThe server handles the request and sends back a response; this may be a redirect or HTML etc depending on status\nBrowser begins rendering HTML and sends request for resources referenced in HTML"
    },
    { question: "What are the differences between Long-Polling, Websockets and Server-Sent Events?",
      answer: "Long polling opens an http request and waits until an update is received. When an update is received, a new request is created and the process starts again.\nHas a much higher bandwidth cost than the other two since it makes requests for each update with associated headers\nServer-sent events are long-lived http requests where updates are continuously sent to the client\nBetter than long polling since only one request needs to be made\nWebsockets is a protocol which allows for bidirectional communication between the server and the client\nGenerally the most performant of the three, however has a larger development overhead"
    },
    { question: "Explain the following request and response headers: Diff. between Expires, Date, Age and If-Modified-..., Do Not Track, Cache-Control, Transfer-Encoding, ETag, X-Frame-Options",
      answer: "Diff. between Expires, Date, Age and If-Modified-...\nEach of these can be used for cache control\nExpires - date/time after which the response is considered stale\nAge - age the object been cached in seconds\nIf-modified - will send 304 if cached content is unchanged since last request\nDo Not Track\n(DNT) requests a web app to disable tracking of a user\nCache-Control\nSpecifies how caching must be conducted by all caching mechanisms along the request/response chain\nTransfer-Encoding\n(TE) transfer encodings the user agent is willing to accept\nETag\nId for a specific version of a resource\nX-Frame-Options\nSpecifies how the site may be framed by external sites, used for clickjack protection"
    },
    { question: "What are HTTP methods? List all HTTP methods that you know, and explain them.",
      answer: "HTTP methods are placed in the HEAD of a request and are used to indicate actions on a server’s resource (commonly forming the CRUD operations for modern API’s), they include:\nGET: used to retrieve (R) data from a server\nPOST: used to create (C) data if it doesn’t already exist\nPUT: used to update (U) the referenced data if it already exists\nDESTROY: used to delete (D) the referenced data on the server\nPATCH: used to partially modify a resource"
    }
  ],
  coding : [
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
  ],
  fun : [
    { question: "What's a cool project that you've recently worked on?",
      answer: "I recently built an audio-visualiser using a React and Webpack with wrapper components for a number of different creative coding API (incl. Three.js, P5.js and Canvas API), all of which utilize the same component lifecycle"
    },
    { question: "What are some things you like about the developer tools you use?",
      answer: "What I love about Atom is its open-source nature, built-in git tools and diverse package ecosystem"
    },
    { question: "Who inspires you in the front-end community?",
      answer: "A number of resources and studios serve as constant inspiration; Awwwards, the UX/UI section on Behance, Google Experiments etc. And, though not really front-end, Daniel Shiffman of course!"
    },
    { question: "Do you have any pet projects? What kind?",
      answer: "Yep, I like to combine creative coding in my own work as much as possible. I’m currently building a web-based mixed reality application which takes a camera feed and uses Three.js and various shaders to produce psychedelic fractals and effects."
    },
    { question: "What's your favorite feature of Internet Explorer?",
      answer: "That it isn’t supported on OS X"
    },
    { question: "How do you like your coffee?",
      answer: "Black"
    }
  ]
}
