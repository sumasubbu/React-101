// React functional components
// it is a normal JS function which returns a JSX element
// name of the component should always start with capital letter
// mostly written using arrow functions with implicit return

import React from "react" 
import ReactDOM from "react-dom/client"

// react element using JSX
const heading = (
  <h1 className="heading">
   Hello welcome to chapter 3 part 4
  </h1>
)
// react functional component with {} statement block explicit return statement inside. If using {} always explicitly write return keyword
const HeadingComponent = ()=>{
  return <h1>I am a heading component</h1>
}
// react functional component with a single line jsx and implicit return. If it is a single line jsx, omit return keyword
const ParagraphComponent = ()=> <p>I am a paragraph component</p>

// react functional component with multiple line jsx return. If there are multiple line of JSX to return enclose within ()
const TitleComponent = ()=> (
  <h1>
  I am a title component
  </h1>)
  


// component composition - rendering one component inside another component
// if rendering adjacent JSX elements, wrap a <> </> or <div> </div> or <Fragment> </Fragment> (import Fragment from react) also called empty fragmentation

const HeadingComponent2 = () => (
  <div id='header'>
  <TitleComponent/>
  <h2>
  I am a h2 component
  </h2>
  </div>
)





// rendering the functional component in root element in reactDOM
const root = ReactDOM.createRoot(document.getElementById('root'))
// babel understands components that are rendered by this syntax <ComponentName />
root.render(<HeadingComponent2 />)
