import React from 'react'

class Bomb extends React.Component{

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }

    }

    render() {
        
        
       let timer = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        
        return (
            <div>{timer}</div>
        
        )
    }
}
export default Bomb