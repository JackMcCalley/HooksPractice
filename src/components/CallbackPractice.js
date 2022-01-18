import axios from "axios";
import { useState, useCallback } from "react";
import Child from "./Child"

export default function CallbackPractice() {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("Yes hello")

    const returnComment = useCallback((name) => {
        return data + name;
    }, [data])

    return (
        <div>
            <Child returnComment={returnComment} />

            <button onClick={() => {
                setToggle(!toggle)
            }}>
                {" "} Toggle
            </button>
            {toggle && <h1>toggle</h1>}
        </div>
    )
}