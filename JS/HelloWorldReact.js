import React from 'react';
import ReactDOM from 'react-dom/client';
const content = React.createElement('div', { id: 'parent', key: 'parent' }, [
  React.createElement('div', { id: 'child1', key: 'child1' }, [
    React.createElement('h1', { key: 'child11' }, 'heading1'),
    React.createElement('h1', { key: 'child12' }, 'heading2'),
  ]),
  React.createElement('div', { id: 'child2', key: 'child2' }, [
    React.createElement('h1', { key: 'child21' }, 'heading1'),
    React.createElement('h1', { key: 'child22' }, 'heading2'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content);
