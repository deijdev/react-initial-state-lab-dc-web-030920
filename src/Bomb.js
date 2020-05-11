import React, {Component} from 'react';

class Bomb extends Component {

    constructor(props){
        super()
        this.state = {
            secondsLeft : props.initialCount
        }
    }

    decrementSeconds = () => {

        const newSecond = this.props.initialCount - 1
        this.setState({
            secondsLeft : newSecond
        })
    }

    render(){
      if(this.state.secondsLeft > 0){
       return( 
       <div>
        {this.state.secondsLeft} seconds left before I go boom!
        </div>
       )
        }else {
            return(<div>Boom!</div>)
        }
    }

}

export default Bomb
