import React, { useRef, useState } from "react";

function RefPractice() {
    const [name, setName] = useState("");

    const inputRef = useRef(null);

    const onClick = () => {
        inputRef.current.focus();
        setName(inputRef.current.value)
    }

    const clearName = () => {
        inputRef.current.value = ""
    }

    return(
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Type something here" ref={inputRef} />
            <button onClick={onClick}>Change Name</button>
            <button onClick={clearName}>Clear</button>
        </div>
    )
}

export default RefPractice