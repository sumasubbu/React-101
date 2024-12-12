// writing JS code in jsx using {}

import React from 'react';
import ReactDOM from 'react-dom/client';

// if there are multiple elements in the jsx enclose them within <> </> or <div> </div> or <Fragment> </Fragment> (import Fragment from react library)
console.log('hello1');
const title = (
  <>
    <h1>title1</h1>
    {console.log('hello')}
    <h1>title2</h1>
  </>
);

const Greet = () => (
  <h1>
hello! Welcome!
 </h1>)
;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greet />);
