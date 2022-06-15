import { useState,useEffect } from "react";

const EventHandling = () =>{

    const [inputval, setInputVal] = useState("");

useEffect(() =>{
    document.addEventListener('keydown', handleKeyDown);
}, [])

const handleKeyDown = (e) => console.log("...... on key down ....", e.keycode)

const handleClick = () =>{
    console.log("clicked");
};

const handleChange = (e) => {
    setInputVal(e.target.value);
};


    return(
        <>
        <button onClick={handleClick}>click me</button>
        <input value = {inputval} onChange={handleChange}></input>
        <h1 onMouseOver={() => console.log("....Mouse hoverd.....")}>Hovering</h1>
        <h1>This is a on key down</h1>
        </>
    )
}

export default EventHandling;