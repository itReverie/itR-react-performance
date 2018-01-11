import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//----Option 1 React Perf------
//import Perf from 'react-addons-perf';
// if(typeof window !== 'undefined') {
//     window.Perf = Perf;
// }
//----Option 1------


//----Option 2  React Performance Devtool------
const registerObserver = require('react-perf-devtool')
  const options = {
    shouldLog: true,
    port: 8080
  }
  function callback(measures) {
    // do something with the measures
  }
   registerObserver(options, callback)
//----Option 2------

class App extends Component {






  //----Option 1------
  //componentDidMount() {
          // debugger;
          // Perf.start();
          // //Perf.getLastMeasurements();
          // Perf.printWasted();
  //}
  //----Option 1------



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
