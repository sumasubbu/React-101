import React from 'react';
import ReactDOM from 'react-dom/client';

//react code written using core React
// const heading = React.createElement('h1',{id:'heading'},'Namaste React using core react');

// console.log(heading)
// root.render(heading)

//react code written using JSX
// jsx is not html in react, it is html like syntax which FB developers developed to make us code easily as core react is cumbersome.
// babel transpiles jsx to React element which is a JS object which when rendered becomes an HTML element 
const heading = <h1>Namaste React using JSX</h1> 
// if multiple lines of jsx exists wrap them around ()
// const heading = (
// <h1>Hello world!</h1>
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading)

console.log(heading)




