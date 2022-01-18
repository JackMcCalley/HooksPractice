import React, {useState} from 'react'

const StatePractice = () => {
    const [inputValue, setInputValue] = useState("Jack")

    let onChange = (event) => {
        const newValue = event.target.value
        setInputValue(newValue)
    }

    return(
        <div>
            <input onChange={onChange} placeholder="type here" />
            {inputValue}
        </div>
    )
}

export default StatePractice