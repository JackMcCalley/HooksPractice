import React, { useEffect, useState } from 'react'
import axios from 'axios'

function EffectTutorial() {
    const [data, setData] = useState("")
    const [count, setCount] = useState(0)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response)=>{setData(response.data[0].email)})
            console.log("API WAS CALLED");
    }, [])

    return (
        <div>
            <div>Hello {data}</div>
            <div>{count}</div>
            <button
                onClick={()=> {
                    setCount(count + 1)
                }}>
                Click
            </button>
        </div>
    )
}

export default EffectTutorial