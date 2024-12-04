const content = React.createElement('div',{id:'parent',key:'parent'},[
  React.createElement('div',{id:'child1',key:'child1'},[
    React.createElement('h1',{},'heading1'),
    React.createElement('h1',{},'heading2')
  ]),
  React.createElement('div',{id:'child2',key:'child2'},[
    React.createElement('h1',{},'heading1'),
    React.createElement('h1',{},'heading2')
  ])
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(content)