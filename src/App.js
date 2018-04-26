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
      input: 'aklsjfalkwjnfaskj.dfn',
      update: 'Empty',
      cards: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    // Step 1-front end request
    // create anaxios request and hit the test endpoint when the page loads
    // set the response to the 'test' property on state
    axios.get('/api/test')
      .then( ({ data }) =>  this.setState({ test: data }));
    
    
    // Step 2-front end request
    // hit the get cards endpoint so that our cards show up
    // set the response to the 'cards' property on state
    axios.get('/api/cards')
      .then( ({ data }) =>  this.setState({ cards: data }));
    
    
    // Step 3-front end request
    // hit the get endpoint that will send us the textYouCanUpdate variable.
    // set the response to the 'update' property on state
    axios.get('/api/update')
      .then( ({ data }) =>  this.setState({ update: data }));
    
    
    // ------------------ end of componentDidMount --------------------
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
    console.log('you changed something!');
    
  }


  // Step 6-front end request
  // PUT
  //create a function to hit an endpoint whenever someone types into the update endpoint
  // set the response to update the update prop on state
  handleUpdate() {
    console.log('handling the update');

  }


  // Step 7-front end request
  // DELETE
  // create an input to handle clicking on a card to remove it
  // update the cards array with the response from state
  handleDelete(index) {
    console.log('handling the delete');

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
      return <div className="card" onClick={() => this.handleDelete(i)} key={i}><h2 className="card-text">{card}</h2></div>
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Endpoints and Axios!</h1>
        </header>
        <section className="body-wrapper">
          <section>
            <div className="response">
              <h3 className="response_text">Test endpoint: {this.state.test}</h3>
            </div>
          </section>
          <section>            
            <div className="button-container">
              <button className="button" onClick={this.handleClick}>Click Me</button>
              <div className="button-text">{this.state.clicked}</div>
            </div>
          </section>

          <section className="postInput-wrapper" >
            <div className="postInput">
              <label for="#postInput" className="postInput-label">You can type stuff here: </label>            
              <input className="input postInput-input" id="postInput" type="text" onChange={this.handleChange} />
            </div>
            <div className="postInput-text">
              And see it here: <span className="postInput-text_response">{this.state.input}</span>
            </div>
          </section>
          <section className="update-wrapper">
            <div>{this.state.update}</div>
            <div>
              <label>By Typing here: </label>
              <input className="input" type="text" onChange={this.handleUpdate} />
            </div>
            
          </section>
          
          <section className="cards">
            {displayCards}
          </section>
        </section>
        

      </div>
    );
  }
}

export default App;
