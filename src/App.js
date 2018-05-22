import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import route from './route';
import Nav from './Nav/Nav';
import Room from './Room/Room';



class App extends Component {
  constructor(){
    super();
    this.state={
      room:''
    }
    
  }
  render() {
    return (
      <div className="App">
      <Nav room={this.state.room}/>
      <input  onChange={e=>this.setState({room:e.target.value})}/>
      
      {route}
      </div>
    );
  }
}

export default App;
