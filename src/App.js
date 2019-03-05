import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Books from './pages/Books';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props.source)
    return (
      <div className="App">
        <Route exact path="/" component={Books} ></Route>
      </div>
    );
  }
}

export default App;
