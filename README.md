# React 101 notes

## Chapter 1

### What is Emmet?

- A plug-in for text editors that allows developers to code faster by typing short expressions which are then expanded into boiler-plate code.
- It has short versions for creating HTML boilerplate code, to create elements with ids and classes, to create nested/sibling elements etc
  Refer this medium article on emmet and the most common shortcuts used - https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c

### What is the difference between a library and framework?

- A library contains pre-written code snippets that are written by third parties which can be used multiple times anywhere in the program to get certain tasks done. The control lies with the developer, ie, the developer decides where these code snippets can be plugged into the application code and tells the application when to call it.
- A framework provides a structure for the program. These are also written by 3rd parties to optimise the performance of the application. The control is inverted here, ie , it lies with the framework, where it tells the developer where to write the code and the framework decides when to call the code.

### What is CDN? why do we use it?

- CDN (content Delivery/distribution network) contains interconnected servers, which are geographically closer to the users, large files like videos, images are loaded faster if served from cdn servers. The data has to travel across the internet travelling long physical distances which increases the time taken to load the web pages.
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

### What is parcel/webpack? why do we need it?

- These are examples of bundlers
- Bundlers are needed to minify and clean the code, cache it and optimize it so that the developed code is ready for production.
- Bundlers automate the process of combining large files consisting of images, JS and CSS files into a single file/package or smaller number of files using the help of dependencies to compress, transform, transpile and optimize code.
- this reduces the number of network requests made to fetch these files in the browser of the end user, as the browser has to fetch only one file or a few files compared to large files used in development mode.

### What is parcel-cache?

- Each time the app is run, it undergoes a build process for production, the built code is stored in .parcel-cache folder in binary code format
- Each time the code is changed and saved a build is triggered.
- The first build takes some time in milliseconds and parcel creates a folder '.parcel-cache' and subsequent builds take lesser time than its previous builds, this is because parcel accesses its cache and updates only the files that have been changed
- This way the entire code need not be re-parsed and re-analysed for every build
- This makes the app faster development experience

### What is npx?

- Stand for node packgae execute. It is a CLI tool used to execute the node packages directly from npm registry without installing them globally into the system.
  command to use

```
npx <package-name>
```

- npx first checks to see if the package is already present locally in the project
- if present it executes the package's command
- if local installation of the package is not present, it installs the package from npm registry into a temporary cache and defines the PATH for execution
- after installation it executes the associated command of the package
- after execution is complete it deletes the temporary installation of the package

When is it used?

- when the package is used only once or occasionally not requiring a global installation
- One off commands - like in setting up a project without installing the framework(package) globally (npx create-react-app my-app)
- linting and formatting - run code quality tools without installing them globally (npx eslint .)
- testing new packages
- testing a different linter

### What is the difference between dependencies vs devDependencies?

There are two kinds of dependencies

- devDependencies - these packages are only required to run an application in development but not needed in production, eg: testing frameworks, linting packages
- -D specifies the package installed is a devDependency
- the packages installed with -D is tracked in package.json under devDependencies

```
"devDependencies": {
  "parcel" : "^2.8.3"
}
```

- when devDependencies are installed a package-lock.json file is created which stores the exact version of the package installed
- dependencies - these are the packages required to run the application in production, eg: React, Vue etc
- command to install dependencies

```
npm install <package-name>
```

- an object called "dependencies" is created in package.json which tracks all the dependencies installed

```
 "dependencies": {
   "parcel" : "^2.8.3"
 }
```

### What is tree shaking?

- dead code elimination technique used in optimization of the code
- bundlers automatically perform tree shaking
- getting rid of any unwanted code from the app during bundling
- results in faster loading apps, smaller and optimized apps
- used in readying the app for production to create smaller files, clean structure and prevent unnecessary loading of data

### What is Hot Module Replacement?

- keeps track of all the files/modules that are getting updated
- it tells the server to reload to accommodate the changes in the files without doing a full reload of the app
- preserves the state of the app by only reloading the file that are updated which is otherwise lost during a full reload
- when CSS/JS code is updated in the source code, it instantly updates the same in the browser
- it has a File Watcher Algorithm written in C++

### List down your 5 favourite superpowers of Parcel. Explain any 3 of them in detail.

- Parcel has HMR
- minifies the code
- caches the code during build
- Tree shaking
- dev build and production build

HMR - build after every save. Watches for any modifications done to the files and when saved triggers a build and only those files are updated in the browser, without doing a full reload of the app
dev build and prod build - when the code is built (dev or prod), the minified code is stored in dist folder and the build is cached in .parcel-cache folder. The browser loads the app from .parcel-cache and dist and not from index.html or app.js
prod build generates 3 files, compressed html file (compressed to just one line), .css and .js compressed files
Tree Shaking - removes any unwanted code while building the app for production, optimizes the app

### What is .gitignore? What should we add and not add to it?

- .gitignore file is added to the root of the project directory.
- the files and directories added to this are ignored by git while making a commit
- to share the ignore rules with other users who clone the repository commit the .gitignore file to the repository
- node_modules, dist, .parcel-cache should be added to .gitignore
- the source code - JS files, html file, CSS files, package.json and package-lock.json should not be added to .gitignore. These files should be committed to the repo

### What is the difference between package.json and package-lock.json?

- package.json
- a metafile that describes the packages installed, its configuration and version
- it contains information about the project, its author, version, description etc
-

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
