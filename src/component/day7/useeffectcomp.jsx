import { useEffect } from "react";
import { useState } from "react"


const UseEffectComp = () =>{

    const [counter, setCounter] =useState(0);
   const [decrementCounter, setDecrementCounter] = useState(100);

   const [showCounter, setShowCounter] = useState(true);


  useEffect(() =>{
    //  document.addEventListener('keydown', handleKeyEvent);
    console.log("Increment Counter variable is updated");
    // return(
    //     document.removeEventListener('keydown', handleKeyEvent)
    // )
  }, [counter]);

  useEffect(() =>{
    console.log("Decrement counter variable is updated");
  }, [decrementCounter]);


  useEffect(() =>{
    console.log("component is unmounted")
  }, [showCounter])
//   const handleKeyEvent = (e) =>{
//     console.log("keycode is", e.keyCode);
//   }
  return (
    <>
    <h1>Increment Counter: {counter}</h1>
    <button onClick={() => setCounter(counter +1)}>Increment</button>

    <h1>Decrement Counter: {decrementCounter}</h1>
    <button onClick={() => setDecrementCounter(decrementCounter -1)}>Decrement</button>
    
    {
        showCounter ? <> <h1>Increment Counter: {counter}</h1>
        <button onClick={() => setCounter(counter +1)}>Increment</button> </> : null 
    }

    <button onClick={() => setShowCounter(!showCounter)}>countHide</button>
    </>
  )

}

export default UseEffectComp;