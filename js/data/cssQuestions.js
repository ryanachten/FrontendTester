define([], function () {
  const cssQuestions = [
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
      answer: "A BFC is an area where block and float elements are placed. These contexts are like containers which have flow rules, which used to contain and restrain the positioning of their elements on a page as well as preventing margins from collapsing."
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
      answer: "The generally recommended approach is to absolute position the element in question off the page using and a left or right measurement. Other approaches, such as using text-indent or clipping have their own drawbacks."
    },
    { question: "Have you ever used a grid system, and if so, what do you prefer?",
      answer: "I have used Foundation’s grid system and briefly used Bootstrap in the past. I prefer the control available in modern CSS-only systems such as Flexbox"
    },
    { question: "Have you used or implemented media queries or mobile specific layouts/CSS?",
      answer: "Absolutely. When a fluid grid does not cater for mobile adequately, I will definitely use media queries"
    },
    { question: "Are you familiar with styling SVG?",
      answer: "I usually create and style my SVG assets in Illustrator and Sketch before optimising in SVGOmg. I have used SVG filters in the past too."
    },
    { question: "Can you give an example of an @media property other than screen?",
      answer: "Can be used to deliver print and speech-specific styles too"
    },
    { question: "What are some of the 'gotchas' for writing efficient CSS?",
      answer: "Specificity helps aid performance; i.e. reduce wildcards and other selectors which apply to large numbers of tags\nAvoid unused and redundant code\nAs with any other code, keep it DRY (use of mixins and variables with SCSS can be useful here)"
    },
    { question: "What are the advantages/disadvantages of using CSS preprocessors?",
      answer: "Preprocessors are great in the sense that they allow for modularity in styles, enabling easier maintainability, and often provide minification which is great from a performance standpoint. Variables, mixins etc are awesome features too. In general, css becomes moe programmatic.\nDisadvantages are there is sometimes a delay when compiling styles for larger projects. Larger projects can also produce bloated css files (even w/ minification) - these can be broken into multiple docs though."
    },
    { question: "Describe what you like and dislike about the CSS preprocessors you have used.",
      answer: "I predominantly use SCSS via the Sass CLI as a I prefer the syntax to Sass. I have used Sass in the past and I have looked into Less."
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
      answer: "The display property specifies the type of rendering box to be used when displaying an element. This can affect the size, position and visibility of the element in question, by setting it to ‘block’, as opposed to ‘none’"
    },
    { question: "What's the difference between inline and inline-block?",
      answer: "An inline element sits along the same baseline as other inline elements, cannot have height and width defined (defined by content size) and respects only left and right margins\nAn inline block element also sits along the baseline with other inline elements, however can have height and width defined and respects all margins"
    },
    { question: "What's the difference between a relative, fixed, absolute and statically positioned element?",
      answer: "Relative positioning right/left/top/bottom units act as an offset from its original position\nAbsolute places the element outside of the normal document flow and allows the element to be translated to the right/left/top/bottom of their parent element\nFixed places the element outside of the normal document flow altogether, allowing it to be placed independently statically relative to viewport"
    },
    { question: "What existing CSS frameworks have you used locally, or in production? How would you change/improve them?",
      answer: "I have used Foundation by Zurb and various implementations of Google’s Material Design system a lot. I generally like their base styles, however, Foundation’s grid system irks me - it doesn’t account well for, from my experience, retina displays"
    },
    { question: "Have you played around with the new CSS Flexbox or Grid specs?",
      answer: "I have used Flexbox extensively in a number of projects. I looked into CSS Grid when it came out last year but wasn’t widely supported. I notice support has now improved, so would consider using it these days"
    },
    { question: "Can you explain the difference between coding a web site to be responsive versus using a mobile-first strategy?",
      answer: "Making a website responsive implies that the website already exists in a non-responsive manner and requires styles to be created to account for other screen sizes.\nWhen developing mobile-first, we begin with the lower screen real estate and performance that these devices have to offer. Other devices and screen sizes are developed subsequently. User experience for mobile devices here is paramount."
    },
    { question: "Have you ever worked with retina graphics? If so, when and what techniques did you use?",
      answer: "Using srcset we can target different screen sizes and link to appropriate images for those sizes. In addition to screen sizes, we can target resolutions if necessary using dpi and pixel ratios "
    },
    { question: "Is there any reason you'd want to use translate() instead of absolute positioning, or vice-versa? And why?",
      answer: "If the element needs to be statically positioned, then absolute + t/b/r/l is fine, however, if the element needs to be animated then using translate() is a more performant solution as it has a lower paint time because it sits on the GPU."
    }
  ];

  return cssQuestions;
});
