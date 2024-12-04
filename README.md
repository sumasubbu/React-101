# React 101 codes

# What is Emmet?
- A plug-in for text editors that allows developers to code faster by typing short expressions which are then expanded into boiler-plate code.
- It has short versions for creating HTML boilerplate code, to create elements with ids and classes, to create nested/sibling elements etc

# what is the difference between a library and framework?
- A library contains pre-written code snippets that are written by third parties  which can be used multiple times anywhere in the program to get certain tasks done. The control lies with the developer, ie, the developer decides where these code snippets can be plugged into the application code and tells the application when to call it.
- A framework provides a structure for the program. These are also written by 3rd parties to optimise the performance of the application. The control is inverted here, ie , it lies with the framework, where it tells the developer where to write the code and the framework decides when to call the code.

# What is CDN? why do we use it?
-  CDN (content Delivery/distribution network) contains interconnected servers, which are geographically closer to the users, large files like videos, images are loaded faster if served from cdn servers. data has to travel across the internet travelling long physical distances. this can increase the time taken to load the web pages 
reduces latency
reduces bandwidth cinsumption
increases content availability - if a server crashes, nearest cdn will replace the server.
intermediary servers- to handle communication requests from users and reduce the bandwidth costs, original server is not bombarded by communication requests.
handle DDoS attacks - it distributes network traffic across intermediary servers and original server is not affected.

# why is react known as react? 

-react is a JS library built to help developers react to changing state and data in the application and update the user interface without reloading the entire page.

# What is crossorigin in <script> tag?
- crossorigin attribute is used to define how resources from servers in other origins are accessed. Here the origin refers to domain, port, sub-domain, security protocol(https/http) etc
- If the attribute is set to anonymous, then the web app making the request need not provide user credentials
- If the attribute is set to use-credentials, the the web app making the request should send credentials, cookies, certificates etc for validation.
- crossorigin attribute is a part of CORS tool (header based mechanism) which handles the requests made to servers in other origins while preventing cross-origin site attacks.
- for security reasons, browsers do not allow resource sharing between different origins. fetch() and XMLHttpRequest() follow same-origin resource sharing policy. To access resources from other origins, CORS is needed.
- The browsers make a pre-flight request to the server hosting the cross-origin resource to check if the server allows the actual request. The browser sends headers that indicate HTTP method and headers that will be used in the actual request.

# Parcel Bundler -
- creates a dev build
- creates a localserver
- automatically refreshes the page , HMR (Hot Module Replacement) or Hot Reloading
- uses a File Watching Algorithm written in C++
- builds after every save, and the build time is significantly reduced for each build
- caches binary files in order to build faster after every save (.parcel-cache)
- does image optimization,loading images are a costly operation in web development
- minifies files for production
- compresses files
- consistent hashing
- code splitting
- differential bundling - runs app on different versions of a browser, also in different browsers
- diagnostics - provides better error suggestions
- can also host app on https
- Tree shaking - remove unused code
- different builds for dev and production
