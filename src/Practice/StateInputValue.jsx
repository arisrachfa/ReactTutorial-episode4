import React, {useState} from 'react'
import '../App.css'

const StateInputValue = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

  return (
    <div className='App'>
        <input type="text" onChange={handleInputChange}/>
        <br />
        {inputValue}
    </div>
  )
}

export default StateInputValue