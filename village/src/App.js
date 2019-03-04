import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom'
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: "",
      smurf: {
        name: "",
        age: "",
        height: "",
      }
    };
  }
  componentDidMount(){
    this.fetchSmurfs();
  }

  fetchSmurfs(){
    axios
    .get("http://localhost:3333/smurfs")
    .then( res =>
      this.setState({
        smurfs: res.data
      })
    )
    .catch(err => {
      console.log(err);
    })
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    // add code to create the smurf using the api
    axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => { 
      this.setState({
       smurfs: res.data
      });
      console.log(res);
    })
    .catch(err =>
      console.log(err)
    );
  }

  eaten = (e, id) => { 
      e.preventDefault();
      axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
          this.setState({
              smurfs: res.data
          })
      })
      .catch(err => {
          console.log(err);
      })
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/smurf-form">
          <div className="smurf-form">Grow the Village</div>
        </NavLink>
        <NavLink exact to="/">
          <div className="See the Village">See the Village</div>
        </NavLink>
        <Route path="/" exact render={props => <Smurfs {...props} smurfs={this.state.smurfs} eaten={this.eaten} />} />
        <Route path="/smurf-form" render={props => <SmurfForm {...props} addSmurf={this.addSmurf}  />} />

      </div>
    );
  }
}

export default App;
