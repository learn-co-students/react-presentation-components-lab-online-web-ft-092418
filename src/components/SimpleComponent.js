// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(){
    super()
    this.state = {mood: "happy"}
  }

  fire = () => {
    let mood = this.state.mood
    if (mood === "happy"){
      mood = "sad"
    }else{
      mood = "happy"
    }
    this.setState({mood: mood})
  }

  render(){
    return (<div onClick={this.fire}>{this.state.mood}</div>)
  }
}
