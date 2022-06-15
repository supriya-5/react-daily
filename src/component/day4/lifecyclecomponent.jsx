import { Component } from "react";

class Lifecyclecomponent extends Component{

    constructor(props){;
    super(props);
    this.state = {
        counter: 1 
    };
    this.id= null;
}


componentDidMount() {
    console.log("component Did Mount");
    this.id = setInterval(() => console.log("set Interval"),2000);
}

componentDidUpdate(){
    console.log("component did update");
}

componentWillUnmount() {
   console.log("component will unmount");
   clearInterval(this.id);
}

handleClick = () =>{
    this.setState({ counter: this.state.counter + 1});
}

 render() {
    return(
        <>
        <h1>counter: {this.state.counter}</h1>
        <button onClick={this.handleclick}>Click</button>
        </>
    )
 }
}

export default Lifecyclecomponent;