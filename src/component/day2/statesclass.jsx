import React, {Component} from 'react';

class StatesClass extends Component {
    constructor(){
        super();
        this.state = {
         counter: 0,
        }
    }
 handleClick = () =>{
     this.setState({
       counter: this.state.counter +1,
      } )
 }
    render(){
        return (
            <div>
            <h1>class Counter: {this.state.counter}</h1>
            <button onClick={this.handleClick}>Increment class</button>
            </div>
        )
    }
}

export default StatesClass;

