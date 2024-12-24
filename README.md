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

### What is the difference between React and ReactDOM (React.createElement and ReactDOM.createRoot)

- React here refers to the core react library, which has tools and methods by which component based user interfaces are built. These elements are created as objects, which are then rendered as HTML elements in the ReactDOM.
- ReactDOM is the mediator between the actual browser DOM and react's virtual DOM. It renders the components created using core react library in the DOM and perform DOM manipulation.
- The files are available separately because the react components built using core react library can be rendered in different interfaces such as web (ReactDOM), mobile(ReactNative),Virtual Reality (ReactVR) etc. Core react is not platform dependent, this is what makes it so versatile.

```
import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", {id:"heading"}, "Hello, World!")
const root = ReactDOM.createRoot(document.getElementByID("root"))
root.render(heading)

```

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
 - it contains information regarding the direct dependencies, or the packages that the developer has installed
 - it does not contain information about the transitive dependencies
 - it allows the developers to write CLI alias commands as "scripts" which then helps them to run commands in an easier and faster manner
 - it enables the developers to start the project by defining the entry point, run scripts, install dependencies, publish to npm registry etc
 - it contains information about the project, its author, version, description etc
 - 
 - when a developer installs the folder containing the source code, the dependencies can be downloaded using npm if package.json is present in the code directory
 command to install packages using package.json
 ```
 npm install
 ```
 - the dependencies installed using the above command will be stored in node_modules folder in the root of the project
 - this file needs to be committed to github repo

- package-lock.json
 - describes the exact version of the dependencies used in the project
 - it contains information regarding versions of the transitive dependencies, which is not present in package.json
 - this guarantees the dependencies for other developers of the project or prod releases
 - also guarantees all the subsequent installations of the project will have the exact version locked in package-lock.json
 - it allows the developers to test different versions of dependencies using package.json while using the exact version to run the project
 - it regenerates the file whenever changes are made to package.json file
 - when devDependencies are installed npm automatically creates a package-lock.json file  

- While configuring the project initially, when 'npm install' is run a node_modules folder and package-lock.json file is created.
- if ^ symbol is present before the version of dependencies mentioned in package.json, eg: ^1.0.0 the next available patch for the version of the dependencies, if available, are installed from npm registry and it is locked in package-lock.json
- any subsequent npm install commands run after this will not update the versions (even if ^ symbol is present), because package-lock.json locks the version of the dependencies to one that was initially installed. npm will look for package-lock.json here after for any further dependency re-installations.
- if the project/app is already installed, even if new versions of the packages used in the project is available in npm registry, npm will not automatically update to these patches/versions.
- updation of the packages will only happen if node_modules folder and package-lock.json file is not present.

### Why should I not modify package-lock.json?
- package-lock.json locks the exact version of the dependency tree (includes transitive dependencies) of the project
- this ensures the developers working on the project or the prod releases will use the exact version of the dependencies which are initially used
- if it is modified, the app will not work consistently across the devices the app. If a developer pulls the changes and then runs 'npm install' npm now installs the modified version of the dependencies.
- To make any modifications it should always be done in package.json

### What is node_modules? Is it a good idea to push it on git?
- node_modules is a folder that is automatically generated at the root of the project directory by npm when npm install command is run for the first time while installing the project
- it contains all the dependencies that are installed from package.json and its sub-dependencies.
- it is bulky in nature and can be easily installed in any system from npm registry if package.json file is present
- it is not a good idea to push it to github repository as it can easily be regenerated in any system

### What is the 'dist' folder?
- it contains compressed, minified and optimized HTML, css and JS code
- it also contains compiled modules that may or may not be used with other systems
- when bundler builds for development or production, the code is minified and stored in dist folder
- bundler now uses these dist files to update the browser pages, not index.html or App.js
- if production build is made, 3 files one each for html, css and JS containing minified code is generated in dist

### What is 'browserslist'?
- it is an object that is defined in package.json
- specifies the versions of the browsers the web app is compatible with
```
"browserslist": [
  "last 2 versions"
]
```
this means the web app will run in the last 2 versions of all the browsers that are currently available
- visit https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z for more information regarding browserslist

### Difference between ^ and ~ ?
- ^ caret
 ^ tells npm to update to the next available patch of the version from npm registry while installing for the first time in the project
 ```
 "dependencies": {
  "parcel": "^1.0.0"
 }
 ```
- ~ tilda
 ~ tells npm to update the dependency to the next major version available in npm registry while installing it initially in the project.
 ```
 "dependencies": {
  "parcel":"~1.0.0"
 }
 ```
Best practice is to use ^ symbol 

### Steps to run the app using libraries (react,reactDOM, parcel)
- install npm into the repo 
```
npm init
```
- install react and reactDOM libraries from npm registry
``` 
npm install react
or 
npm i react
```
```
npm install react-dom
```
- remove CDN links from index.html
- to use the react and react-dom code present in node_modules into the app import them in app.js. JS will not understand what 'React' in 'React.createElement()' and 'ReactDOM' in 'ReactDOM.createRoot()' is without the imports.

```
import React from react
```
```
import ReactDOM from react-dom/client
```

- install parcel bundler
```
npm install parcel
```
- start the app using parcel
```
npx parcel index.html
```
This will run the app in development mode
```
npx parcel build index.html
```
The above command will build the app for production
- to run these commands using npm scripts, go to package.json and add to scripts
"scripts": {
  "start": "parcel imdex.html",
  "build": "parcel build index.html"
}
now the app can be run using npm
```
npm run start
or
npm run
```
```
npm run build
```
- add files and folders that need not be tracked/ committed to github repo to .gitignore file
- node_modules, dist and .parcel-cache have to added to .gitignore file as these folders and files can easily be generated when the app is fetched from github
- configure "browserslist" in package.json to specify the browsers and the versions that are compatible with the app
- play around with dev build and prod build and see how the code changes in dist and .parcel-cache

## Chapter 3

### What is jsx? What are the benefits of JSX?
- it is a html like syntax developed by facebook, to code using react in an easy and non-cumbersome manner
- jsx is not html in Javascript
- nesting elements using core react, ie, React.createElement is cumbersome. It involves writing multiple lines of code which is often confusing to read
- to make development using react easy, jsx was developed.
- code written using jsx seems familiar to developers as it resembles html syntax
- earlier web apps had content, styling and logic separately in different files (html,css and JS files)
- but in modern web apps JS logic changes the html content. jsx allows developers to write html content and the logic repsonsible for editing the content in the same component

### React.createElement vs jsx
- React.createElement
 - it is an api provided by core react library
 - it is used to create react elements - abstraction over real DOM elements - which core react can process
 - when React.createElement() function calls are made, react elements are created which are JS objects
 - React has a virtual DOM which is a lightweight representation of actual DOM
 - React compares new virtual DOM with its previous virtual DOM and identifies the UI that is changed dynamically by changes in props or state
 - React uses the ReactDOM render method to update the real DOM with the changes
 - ReactDOM.render() method translates the react elements created using React.createElement() into real HTML elements and renders onto the real DOM.
 - Real DOM can only understand html,css and JS, not react React.createElement()

- JSX
 - stands for Javascript XML
 - it is a syntax extension for Javascript, resembles html, integrates JS expressions directly within the markup by enclosing them within {}
 - It is an html like syntax which makes creating react elements concise and easy to read
 - simplfies the process of creating UI components
 - it was introduced as it is similar to html syntax which the developers are already familiar with, which makes it easier to learn
 - nesting elements is easy, just like html element nesting
 - creating elements using React.createElements() made it easier to introduce bugs as it is cumbersome to code
 - react does not understand JSX. It needs a transpiler to convert the code written using JSX to create react elements using React.createElement() api calls
 - Babel is the transpiler Parcel uses.
 - Parcel installs a package called Babel to transpile jsx code
 - babel translates jsx code to React.createElement() method calls, which then creates react elements which are JS objects and these are rendered as HTML elements in the real DOM 
 - it undergoes react's validation process while rendering data to prevent cross site scripting attacks
 - multi line jsx needs to be wrapped in () to tell babel the start and end of jsx
 ```
 const jsxHeading = (
  <h1>
   hello world!
  </h1> 
 );
 ```
 - custom react components are represented as tags eg: <CustomComponent/>, inside jsx
 - JS code and expressions are represented within {} inside jsx
 ```
 const greet = (
  {jsxHeading}
  <h1> Such a beautiful day! </h1>
 )
 ```
 since jsxHeading creates a react element which is ultimately a JS object, it needs to be enclosed within {} inside greet element as all JS needs to wrapped in {}
 - uses camelCase for attributes, eg: className = "heading"
 - inline styles are written as objects with camelcase property names
 ```
 const style = { color:'blue', fontSize:'20px'}
 const element = (
 <span style = { style }> 
  text 
 </span>
 );
 ```
 style is a JS object which should be wrapped in {} inside jsx

### Benefits of JSX
- very similar to html markup syntax, so developers find it easy to learn
- it makes the code concise
- developers can integrate JS code inside the markup, so the content and the logic stays in the same place
- nesting elements is easy 
- it is dynamic and works hand in hand with JS to build components
- it follows JS validation while rendering data and prevents cross site scripting attacks

### Behind the scenes of JSX
- JSX is neither pure JS nor pure HTMl
- it is an html like syntax used to build react components
- browsers do not understand JSX. it only understands html, css and JS
- a transpiler is needed to translate jsx code to JS code
- jsx elements are transpiled to make React.createElement() method calls, which creates react elements. These react elements are JS objects behind the scenes. These JS objects are used to update the virtual DOM. After the process of "reconciliation", react using ReactDOM.render() method renders html elements in real DOM

### The role of Babel and parcel in JSX
- when react code is written using jsx, a transpiler is required to translate the jsx code to JS which the browser understands
- Parcel installs a transpiler as an npm package. Commonly used transpiler is Babel 
- As soon as the code is written and saved, Parcel uses babel to translate the code to the code that browser understands, which is JS, html and css
- jsx mainly helps the developers code efficiently and in a concise manner

### What are components?
- components are reuable piece of code that has structure(html), style(css) and logic(JS) of a portion of the UI
- components break down complex UI into smaller, manageable and independent pieces
- components are the heart of react library. Everything is react is a component
- components must return a single react element. If multiple react elements are to be returned wrap them in a parent <div> or <> (empty fragment to avoid adding extra DOM nodes) or <Fragment> (needs to imported) 
- components can return a string or number (these will be rendered in dom as text nodes) or null (if nothing is rendered) or arrays (array of elements can also be returned) or another component.
- components' name should always start with capital letters
- There are 2 types of components-
 - Functional components 
  - This is the new way of creating components in react
  - These components are basically JS functions that accept props as arguments and return react elements (in jsx) or any supported values
  - these are simple and stateless by default

  functional component with explicit return
  ```
  const Greet = ()=>{
    const num = 1000;
    return (
      <h1>Hello, Your number is {num}!</h1>
    )
  }
  ```
  functional component with implicit return
  ```
  const Greet = (props)=>(
    <h1>Hello {props.name}</h1>
  )
  <Greet name="Suma" />
  ```
- Class Components
 - Older way of writing components
 - Based on JS classes, extends React.Component
 - They have a render method to return the elements 
 - They can hold state and lifecycle methods
 ```
 class Greet extends React.Component {
  render(){
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
 }
 <Greet name="Suma" />
 ```

### Component composition
- Rendering one component inside another is called component composition
- components can be rendered in 3 ways inside another component
 - self closing tag <MyComponent/>
 - open and close tags <MyComponent></MyComponent>
 - function call {MyComponent()}
```
const Title = ()=>(
  <h2>My title goes here</h2>
)
const Greet = () => (
  <div>
  <h1>Hello!<h1>
  <Title/>
  </div>
)
```
 or
 ```
const Greet = () => (
  <div>
  <h1>Hello!<h1>
  <Title></Title>
  </div>
)
```
or
```
const Greet = () => (
  <div>
  <h1>Hello!<h1>
  {Title()}
  </div>
)
```
### Chapter 3 Assignment notes
Create a header component from scratch using functional components with JSX
- add a logo on left
- add a search bar in the middle
- user icon to the right
- add CSS

- I created a functional component by name 'Header'. This component returns a JSX which consists of header structure in html
- the logo is an image downloaded from the internet. This image is wrapped in <a> tag with the redirect set to homepage (href="#")
- user icon is a font-awesome icon where font-awesome library is added via cdn link 
- added a CSS file and imported it so the css rules can be applied to html written inside Header component


My learnings:
- I had trouble rendering the logo image onto the website. Even though the image was present in the project folder under "asset", the app was not able to render it.
- I researched on different methods of rendering images
- visit article https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method#:~:text=The%20most%20straightforward%20way%20to,myImage%20from%20'.%2Fpath_to_your_image.

- I imported the image from the asset folder as "image" 
```
import image from "./path-to-image.png"
```
- to use this image in the <img> tag, set "src" attribute to "image"
src={image}, within {} as 'image' is a JS variable
- now the app renders the image with no issues










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

## Chapter 4

### Is JSX mandatory for React?
- No, it isn't mandatory as React code can be written using React.createElement() method calls
- JSX  stands for Javascript XML is HTML/XML like syntax using which HTML,CSS and JS can all be written in the same place.
- It enhances readability of the code as it is very similar to HTML
- Nesting react elements using React.createElement() needs multiple lines of complex code. Nesting using JSX is easy, as it resembles HTML element nesting.
- React needs a transpiler like Babel to understand JSX.

### Is ES6 mandatory for React?
- No it isn't mandatory to use ES6
- Modern websites use ES6+ features in React to create components and in JS logic
- Functional components are based on JS arrow functions which is a ES6 feature 
- Class components are based off of JS ES6 feature of classes
- Arrow functions, destructuring, rest and spread operators, template literals, modules and import/export are all used in mordern react code 
- Without ES6 components in react are created using create-react-class method. This makes the code more verbose and less readable.

### How are comments written inside JSX?
- Since JSX is a combination of HTML and JS, comments are wrapped in {/*comments*/}
- for multi-line comments 
```
{/* line-1
line-2
line-3
*/}
```

### Difference between <React.Fragment></React.Fragment> and <></> ?
- Both are useful to group elements and avoid adding extra DOM nodes
- <React.Fragment></React.Fragment> is used in situations where key or any attribute has to be passed while rendering
- verbose in nature
- used while rendering lists
```
const seeds = ['flax','pumpkin','sesame']
...
return(
  
  {seeds.map((seed,index) => 
  <React.Fragment key={index}>
  <h1>{seed}</h1>
  </React.Fragment>
  )}
)
```
- <></> is a shorthand for <React.Fragment>, used in situations where no key or attributes are passed while rendering
- concise syntax
- cannot be used while rendering lists
```
...
return(
<>
<h1> hello world</h1>
<h2> Welcome!</h2>
</>
)

