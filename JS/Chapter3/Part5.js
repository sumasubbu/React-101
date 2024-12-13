// writing JS code in jsx using {}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Fragment } from 'react';

// if there are multiple elements in the jsx enclose them within <> </> (to avoid extra DOM nodes) or <div> </div> or <Fragment> </Fragment> (import Fragment from react library)

// console.log() can be used inside jsx wrapped in {}
const displayName = (
  <h3>Hi, I'm suma!</h3>
)
console.log(displayName)
const Title = () => (
  <>
    <h1>title1</h1>
    {console.log('hello')}
    <h1>title2</h1>
  </>
);

// rendering one component inside another
// functional components are JS functions, which have to be rendered within {}
// JSX elements are react elements which are JS objects. They have to rendered within {} 

const Greet = () => (
  <Fragment>
    <h1>hello! Welcome!</h1>
    {Title()}
    {<Title></Title>}
    {<Title />}
    {displayName}
  </Fragment>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greet />);
