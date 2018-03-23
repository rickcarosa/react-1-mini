import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        friends: [cd ],
        picture: '',
        name: ''
      }
  }
  
  updatePicture(event) {
    this.setState({
      picture: event.target.value
    })
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    })
  }

  addFriend() {
    let friend ={
      name: this.state.name,
      picture: this.state.picture
    }
    let newFriends = this.state.friends.slice(0)
    newFriends.push(friend)
    
    this.setState({
      friends: newFriends,
      picture: '',
      name:''
  })
  
  }
  
  render() {

    let friendsArr = this.state.friends.map((event, i) => {
      return(
        <div key = { i }>
          <p> { event.name } </p>
          <img src = {event.picture} alt = "profile" />
        </div>
      )
    })


    return (
      <div className = "App">

        <p> Picture: </p>
        <input 
        type = 'text'
        onChange = { (event) => this.updatePicture(event)} value = {this.state.picture}
        /> 
        <p> Name: </p>
        <input 
        type = 'text'
        onChange = { (event) => this.updateName(event)} value = {this.state.picture}
        />
        <button onClick = { () => this.addFriend() }> Add Friend </button>
        { friendsArr }
        
      </div>
    );
  }
}

export default App;
