import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// This is all you need to let the devtool extension know that you want to measure
// the performance of components in your App. This hook is important and devtool extension
// won't work without this. Also, make sure you read the docs to know more about
// the arguments that you can pass to `registerObserver()` hook. 👍

// Documentation - https://github.com/nitin42/react-perf-devtool#usage

const registerObserver = require("react-perf-devtool")

//registerObserver()

// For example - You can pass an `option` object as an argument to `registerObserver` for logging
// the measures to the console or you can pass a callback which receives parsed measures as its argument.
// Don't worry, everything is given in the documentation. Still, I have written an example below that may be helpful for you 😄


const options = {
  shouldLog: true,
  port: 3000 // Port to which measures are to be logged
}

function callback(measures) {
  // do something with these measures. Send to Googel Analytics Dashboard for further analysis ??
  console.table(measures);
}

// Now pass options and callback to registerObserver hook 😄
registerObserver(options, callback)


// Now you can start the server using `yarn start` (assuming this cmd is in your scripts) and open the devtool.
// Refresh the devtool and it should show the measures ✅.

// If everything works out, clear these instructions 😅. Happy hacking!

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
