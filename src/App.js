import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      response: 'Nothing yet'
    }
  }
  componentDidMount() {
    axios.get('/api/test')
    .then(res => {
      this.setState({response: res.data});
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.state.response}
      </div>
    );
  }
}

export default App;
