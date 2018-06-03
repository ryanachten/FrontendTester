define([], function () {
  const networkQuestions = [
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
  ];

  return networkQuestions;
});
