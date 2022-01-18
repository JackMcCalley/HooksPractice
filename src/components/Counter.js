import React, { useState } from "react";
import useInterval from "./useInterval"

function Counter() {
    let [count, setCount] = useState(0)
    let [delay, setDelay] = useState(1000)

    useInterval(() => {
        //custom logic
        setCount(count + 1)
    }, delay)

    function handleDelayChange(e) {
        setDelay(Number(e.target.value))
    }

    return(
        <div>
            <h1>{count}</h1>
            <input value={delay} onChange={handleDelayChange}/>
        </div>
    )
}

export default Counter