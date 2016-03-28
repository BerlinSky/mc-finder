# Mini Client Finder (mc-finder)

The purpose of the Mini Client Finder to hightlight the ReactJS foundational knowledge

### Fundamental Concepts:

1. How to create a component 
2. How to "inject" a component to a HTML element
3. How to use props
4. How to use state
5. How does parent / child relationship in ReactJS works
6. Learn the concept of the Virtual DOM

### Lifecycle methods:

1. componentWillUpdate() - executed before the render() method of the component  is called.
2. componentDidUpdate() - executed after the render() method is completed and the new changes to the underlying DOM have been applied
3. componentWillMount() - executed before the node is inserted into the DOM
4. componentDidMount() - after the node is inserted into the DOM
5. componentWillUnmount() - right before the component is removed from the DOM

### Mixins:

"Components are the best way to reuse code in React, but sometimes very different components may share some common functionality. These are sometimes called cross-cutting concerns. React provides mixins to solve this problem."

### Working Files (HTML)

- 101-index.html: Initial project setup
- 102-index.html: Use the default properties
- 103-index.html: Define a required property
- 104-index.html: Show parent child relationship
- 105-index.html: Set up initial state
- 106-index.html: Set state on componentDidMount
- 107-index.html: Utilize user-defined functions
- 108-index.html: Log the life cycle events
- 109-index.html: Use the Mixin
- 110-index.html: Move the JSX codes to JS files

### Working Files (JS/JSX)

- 101-app.js:
- 102-app.js:
- 103-app.js:
- 104-app.js:
- 105-app.js:
- 105-app.js:

### ReactJS Components

````JS

+ AppContainer
  |__ AppHeader
  |__ AppMain
  |   |__ClientTable
  |      |__ ClientTHead
  |      |__ ClientTBody
  |__ AppFooter

````




