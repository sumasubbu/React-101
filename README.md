# React 101 notes

## Chapter 1

### What is Emmet?
- A plug-in for text editors that allows developers to code faster by typing short expressions which are then expanded into boiler-plate code.
- It has short versions for creating HTML boilerplate code, to create elements with ids and classes, to create nested/sibling elements etc
  visit https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c

### What is the difference between a library and framework?
- A library contains pre-written code snippets that are written by third parties  which can be used multiple times anywhere in the program to get certain tasks done. The control lies with the developer, ie, the developer decides where these code snippets can be plugged into the application code and tells the application when to call it.
- A framework provides a structure for the program. These are also written by 3rd parties to optimise the performance of the application. The control is inverted here, ie , it lies with the framework, where it tells the developer where to write the code and the framework decides when to call the code.

### What is CDN? why do we use it?
-  CDN (content Delivery/distribution network) contains interconnected servers, which are geographically closer to the users, large files like videos, images are loaded faster if served from cdn servers. The data has to travel across the internet travelling long physical distances which increases the time taken to load the web pages.
CDN - 
- reduces latency
- reduces bandwidth consumption
- increases content availability - if a server crashes, nearest cdn will replace the server.
- has intermediary servers to handle communication requests from users and reduce the bandwidth costs, original server is not bombarded by communication requests.
- handles DDoS attacks by distributing the network traffic across intermediary servers thereby original server is not affected.

### Why is react known as react? 

- react is a JS library built to help developers react to changing state and data in the application and update the user interface without reloading the entire page.

### What is crossorigin in <script> tag?
- crossorigin attribute is used to define how resources from servers in other origins are accessed. Here the origin refers to domain, port, sub-domain, security protocol(https/http) etc
- If the attribute is set to anonymous, then the web app making the request need not provide user credentials
- If the attribute is set to use-credentials, the the web app making the request should send credentials, cookies, certificates etc for validation.
- crossorigin attribute is a part of CORS tool (header based mechanism) which handles the requests made to servers in other origins while preventing cross-origin site attacks.
- for security reasons, browsers do not allow resource sharing between different origins. fetch() and XMLHttpRequest() follow same-origin resource sharing policy. To access resources from other origins, CORS is needed.
- The browsers make a pre-flight request to the server hosting the cross-origin resource to check if the server allows the actual request. The browser sends headers that indicate HTTP method and headers that will be used in the actual request.

### What is the difference between React and ReactDOM (React.createElement and ReactDOM.createRoot) in the code?
- React here refers to the core react library, which has tools and methods by which component based user interfaces are built. These elements are created as objects, which are then rendered as HTML elements in the ReactDOM.
- ReactDOM is the mediator between the actual browser DOM and react's virtual DOM. It renders the components created using core react library in the DOM and perform DOM manipulation.
- The files are available separately because the react components built using core react library can be rendered in different interfaces such as web (ReactDOM), mobile(ReactNative),Virtual Reality (ReactVR) etc. Core react is not platform dependent, this is what makes it so versatile.

### What is the difference between react.development.js and react.production.js files via CDN? 
react.development.js
- core react file (which is developed in pure JS) for developers to use in dev mode
- code is readable, larger in size

react.production.js 
- This is the core react file for production mode
- code is compressed and minified, size is reduced to enhance performance in end-uder devices.

### What is async and defer?
async in functions
- it is a keyword used before function definition.
- async functions will always return a promise.

```
const p = new promise((resolve,reject)=>{
  resolve('promise resolved')
})

 async function getData(){
  return p
 }
  const data = getData() //this data now contains promise that is explcitly returned
  data.then((response)=>console.log(response))
```

- if any other value is returned by the function instead of a promise, the value is wrapped inside a promise and then returned.

```
async function getData(){
  return "async data"
}
const data = getData() // data now contains a promise
data.then((response)=>console.log(response))
```

async and defer in <script> tag 
- when a web page is loaded, html is parsed and scripts are fetched and executed line by line.
- async and defer are boolean attributes that are used in script tag to load the scripts efficiently.
 
 loading a script without async or defer
 - html get parsed until the script tag occurs in the html content. html parsing is halted, scripts are fetched and at the same time executed line by line. After the scripts are completely executed, only then the html parsing is resumed.

 loading script with async attribute 
 - html code is parsed and paralelly the scripts are fetched. Once all scripts are fetched, parsing is resumed and the scripts are executed completely. Only after this the html code parsing is resumed.
 - async does not maintain the order of execution of the scripts. If there are scripts which do not interact with the DOM like scripts that load images or videos can benefit from async.

 loading scripts with defer attribute 
 - html gets parsed and parallelly the scripts are fetched, these scripts are not executed until the entire html code gets parsed (loaded) completely. After the parsing is complete the scripts are executed.
 - Maintains the order of execution of the scripts.
 - useful in situations where the scripts interact with the DOM like adding event listener etc and in situation where scripts are modular in nature.
 - defer is the best of both worlds 

## Chapter 2

### What is npm?
- It is a package manager used to download dependencies/packages to be used in the code.
- it is a repository for all packages
- to add npm in the app,
 ```
 npm init
 ```
 this command adds package.json file in the app's directory, which has information regarding the version and configuration of the packages used in the app.

 
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
