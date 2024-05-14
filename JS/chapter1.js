//creating nested elements
const div = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child-div-1' }, [
    React.createElement('h1', {}, 'elem-1'),
    React.createElement('h1', {}, 'elem-2'),
  ]),
  React.createElement('div', { id: 'child-div-2' }, [
    React.createElement('h1', {}, 'elem-1'),
    React.createElement('h1', {}, 'elem-2'),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

// const parent = React.createElement('div', { id: 'parent' }, [
//   React.createElement('div', { id: 'child1' }, [
//     React.createElement('h2', {}, 'I am child1'),
//     React.createElement('h2', {}, 'I am child1'),
//   ]),
//   React.createElement('div', { id: 'child2' }, [
//     React.createElement('h2', {}, 'I am child2'),
//     React.createElement('h2', {}, 'I am child2'),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent);
