# Getting Started with React Components

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is meant to explain the different ways you can create Components in React.

## What are React Components

In the React world, we create **components** as customizable containers meant to define the JSX elements we want to render on our webpages.

Let's recall a component we've seen already:

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

Look familiar? It should, this is the App.js component generated by Create React App when we first launch a project. You can find this component inseide of the [App.js file](./src/App.js) when you first launch a new create-react-app templated project.

Let's break down this file and learn a bit more about how React components work.

There are essentially three aspects to creating a component:

1. Component Name and Declaration
2. Returning JSX
3. Component Export/Import

### Component Declaration

There are two ways to declare components in React. We can either create **Class** components or **Functional** components. Our App component is an example of a functional component. It uses the `function` keyword to define the component as a function returning some JSX. The name of the function is the name of the component, and should be capitalized. The body of the function is slightly simple with a return statement containing some JSX elements.

```
    function App(){
        return(
             <div className="App">
             ...
             </div>
        )
    }

```

We'll talk more about creating **Class** components and their differences compared to functional components in a bit. For now, let's chat more about what this functional component is returning.

### Returning JSX

React components are really just containers for **JSX elements**. JSX is a Javascript syntax for React that translates our Javascript files into the various HTML elements eventually rendered on the DOM. It's important to remember that JSX elements are J-A-V-A-S-C-R-I-P-T even though they look extremely close to HTML tags. The React library took the liberty of customizing many of the essential HTML elements we're used to into intrinsic JSX elements for us to use within our React Javascript files. A good rule of thumb when building out JSX in your components is to look up an equivalent HTML element and use the corresponding intrinsic JSX element. So if I wanted to add a video to my React app, I'd look up something like "Add video elements in HTML" on Google and get an idea of what HTML elements make that possible. Then you can practically assume that React has a corresponding JSX element with the same name and use that element in your components.

Analyzing our App component further we can see a handful of JSX elements returned to be rendered on the screen. The Divs, Headers, Images, Paragraphs, Anchors, and even the Code elements we see are JSX elements corresponding to equivalent HTML tags. If we isolate the JSX further we'd see that just like regular HTML elements, the JSX can be nested within other JSX elements in order to create the layout of our page.

```
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
</div>
```

But again, this isn't HTML. One important difference between JSX and HTML is the use of the JSX `className` keyword instead of the HTML `class` keyword for declaring our styles. There are more differences that we'll see a bit later on.

### Component Export/Import

Components that we want to use in other files, need to be exported and imported. The syntax to export a component from one file it to add the line: `export default _______` filling in the blank with the name of the component we're exporting again make sure it's capitalized and spelled the same as the declared component. In the case of our App component we see it says: `export default App` at the bottom of the code snippet.

Once a component is declared, and exported from a file, it can be imported into other functions or used in other components alongside the other JSX elements we'd typically return. To import something exported from another file in React, we use the `import` keyword, specifying the specific module to be imported and the file it's declared in.

In the case of the App component, we can see that it is [being imported from inside of our App's index.js file](./src/index.js).

```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

Our index.js file is one of the most important files in our `src` directory. It is responsible for importing the React and ReactDOM libraries from our installed node_modules, as well as importing our App component to be rendered specifically to the ReactDOM and eventually on our web page byway of the render function declared on the ReactDOM module. When a component is being imported you should make sure to import the same name as the export, so the capitalized name of the component.

### Working with Multiple React Components

Ideally speaking, you'd create different React components in order to isolate specific parts of your frontend code. You could theoretically return all the code you wanted inside of one component like the App.js but over time that would get very hard to read.

Instead, we choose to separate our code into multiple components so the code is easier to read but also more modular to use in general. To do so we'd declare different components in different files and export/import them to other files where they will be displayed.

[Take a look at the Hello component in the src folder of this repo](./src/components/Hello.js).

```
import React from 'react'

function Hello() {
  return <div>Yoooooooo we hacking on React!</div>
}

export default Hello
```

As you can see this is a React component that follows the three steps we mentioned earlier: 1) We declared a functional component named Hello 2) We are returning some simple JSX elements, namely a <div> and some text inside 3) We are exporting the component so we can make use of it in other files. _Also one small note, even though we aren't using it yet, it is normally a good idea to import the React library inside of any file that is defining a component. That's what's going on at the top with_ `import React from 'react';`

Now that this Component is declared and exported, it can be utilized elsewhere. If you take a look at the `App.js` in this file you'll see that the default `App.js` has been modified to import our `Hello` component from our components directory inside of the `src` folder and then calls it as an element inside of the App component.

```
import './App.css'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello />
    </div>
  )
}

export default App
```

When a component is being called inside another component it gets written just like other JSX elements with the only difference being that custom components are typically capitalized.

### Class Based Components

So far as we've spoken about components, we've only discussed and declared them as **functional** components, which are objects created using the `function` keyword.

There is another type of component declaration that is widely used in React called **class based** component declaration.

A class based component does the same job as a functional component in returning some JSX to be rendered on our web page. The difference between them is the syntax in how they are defined, and the variety of tasks you can use them for.

Here is the syntax for a class based component:

```
import React from 'react'

// Class based component declaration
class Message extends React.Component {

  // All class based components need to define a render method
  // The render method returns some JSX to be rendered
  render() {
    return <div>This is a class-based component!</div>
  }
}

export default Message
```

As you can see there are a variety of differences in the way that a **class based** component is structured and that of a **functional** component. Classes need to import the React library to make use of the `React.Component`
