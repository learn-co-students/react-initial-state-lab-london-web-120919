// your Bomb code here!
import React from 'react'

class Bomb extends React.Component{

  constructor(props){
    super()
    this.state = {
      secondsLeft : props.initialCount
    }
  }
  timer = () =>  this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>


  render(){
    
    // debugger
  // return this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
  return <div>{this.timer()}</div>
}
}

export default Bomb