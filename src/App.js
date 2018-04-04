import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      test: 'Nothing yet',
      clicked: 'This button has not been clicked yet',
      input: '',
      update: 'Empty',
      cards: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }
  componentDidMount() {
    // create a test endpoint and hit it when the page loads
    // set the response to the 'test' prop on state
    axios.get('/api/test')
      .then(res => {
        console.log(res.data);
        this.setState({
          test: res.data
        });
      })
      .catch(err => console.log(err));
    // hit the get cards endpoint so that our cards show up
    // set the response to the cards prop on state
   axios.get('/api/cards')
      .then(res => {
        this.setState({
          cards: res.data
        })
      })
    // hit the update endpoint so that our update text shows up
    // set the response to the update prop on state
    axios.get('/api/update')
      .then(res => {
        this.setState({
          update: res.data
        })
      })
  }

  //create a function called handle click to hit an endpoint when we click the button
  // set the response to update the clicked prop on state
  handleClick() {
    console.log('clicked the button!');
    axios.get('/api/click')
      .then(res => {
        this.setState({
          clicked: res.data
        })
      })
  }
  //POST
// create a function to hit an endpoint whenever someone types into the input box
// set the response to update the input prop on state
handleChange(e) {
  axios.post('/api/input', {input: e.target.value})
  .then(res => {
    this.setState({
      input: res.data
    })
  })
}


// PUT
//create a function to hit an endpoint whenever someone types into the update endpoint
// set the response to update the update prop on state
handleUpdate(e) {
  axios.put('/api/update', {input: e.target.value})
    .then(res => {
      this.setState({
        update: res.data
      })
    })
  }
// DELETE
// create an input to handle clicking on a card to remove it
// update the cards array with the response from state
handleDelete(index) {
  axios.delete('/api/delete/'+index)
    .then(res => {
      this.setState({
        cards: res.data
      })
    })
}

handleFilter(e) {
  let filterNum = e.target.value
  console.log(filterNum);

 // create an axios request to 
 // hit our query endpoint 
 // and get filtered cards back
  axios.get(`/api/cards?filterValue=${filterNum}`)
    .then(res => {
      this.setState({
        cards: res.data
      })
    })
}
  render() {
    let displayCards = this.state.cards.map((card, i) => {
      return <div className="card" onClick={() => this.handleDelete(i)} key={i}>{card}</div>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          <div className="response">
            {this.state.test}
          </div>
          <div className="button-container">
            <button onClick={this.handleClick}>Click Me</button>
            <div>{this.state.clicked}</div>
          </div>
        </section>

        <section>
          You can type stuff here: <input type="text" onChange={this.handleChange} />
          {this.state.input}
        </section>
        <section>
          You can change this text: {this.state.update}<br/>
          By Typing here: <input type="text" onChange={this.handleUpdate} />
          
        </section>
        <div>
          <label>Filter By Multiples of:</label>
          <input type="number" onChange={this.handleFilter} />
        </div>
        <section className="cards">
          {displayCards}
        </section>

      </div>
    );
  }
}

export default App;
