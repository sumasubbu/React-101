import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// creating react elements using React.createElement
const header = React.createElement('div', {class:'title'}, [
  React.createElement('h1',{},'This is a react assignment'),
  React.createElement('h2',{},'It involves creating nested elements'),
  React.createElement('h3',{}, 'Using React.createElement')
])
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(header)

// creating react elements using jsx
const jsxHeader = (
  <div className="title">
   <h1>This is a react assignment</h1>
   <h2>It involves creating nested elements</h2>
   <h3>Using jsx</h3>
  </div>
) 

const TitleComponent = () => (
  <h2>Title component</h2>
)

// component composition
const HeaderComponent = () => (
  <div>
  {jsxHeader}
  {TitleComponent()}
  {<TitleComponent></TitleComponent>}
  {<TitleComponent/>}
  </div>
  
);





root.render(<HeaderComponent/>)