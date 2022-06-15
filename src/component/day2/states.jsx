import React, {useState} from "react";

const States = () =>{
  
    const [counter, setCounter] = useState(0);

    const handleClick = () =>{
        setCounter(counter + 1);
        console.log("counter:", counter)
    };
return(
    <div>
    <h1>counter: {counter}</h1>
    <button onClick={handleClick}>Increment</button>
    </div>
);
};

export default States;

export const msg = "w/o default";

