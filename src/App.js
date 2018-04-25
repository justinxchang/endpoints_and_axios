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
    // Step 1-front end request
    // create anaxios request and hit the test endpoint when the page loads
    // set the response to the 'test' property on state
    
    // Step 2-front end request
    // hit the get cards endpoint so that our cards show up
    // set the response to the 'cards' property on state
  

    // Step 3-front end request
    // hit the get endpoint that will send us the textYouCanUpdate variable.
    // set the response to the 'update' property on state
    


    // end of componentDidMount
  } // this bracket closes the componentDidMount method. Don't delete it

  // Step 4-front end request
  //inside the handleClick method, hit the get endpoint that will return the string 'This button has been clicked'
  // set the response to update the 'clicked' property on state
  handleClick() {
    console.log('clicked the button!');

  }


  // Step 5-front end request
  // inside the handleChange method
  // hit the post endpoint that will accept your string and send it back
  // whenever someone types into the input box
  // set the response to update the 'input' property on state
  handleChange(e) {
    
  }


  // Step 6-front end request
  // PUT
  //create a function to hit an endpoint whenever someone types into the update endpoint
  // set the response to update the update prop on state



  // Step 7-front end request
  // DELETE
  // create an input to handle clicking on a card to remove it
  // update the cards array with the response from state
  handleDelete(index) {

  }

///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// DO NOT CHANGE ANY CODE ABOVE THIS LINE!!!!!
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\
// everything below this line is set up to work if you are updating 
// state properly. Feel free to look around at what is happening here, 
// but only change things at your own risk
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
        
        <section className="cards">
          {displayCards}
        </section>

      </div>
    );
  }
}

export default App;
