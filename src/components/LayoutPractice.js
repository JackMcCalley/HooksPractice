import React, { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectPractice() {
    const inputRef = useRef(null)
    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value = "HELLO"
    }, [])
    
    return (
        <div>
            <input ref={inputRef} value="Jack"/>
        </div>
    )
}

export default LayoutEffectPractice;