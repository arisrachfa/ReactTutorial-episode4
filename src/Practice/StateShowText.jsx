import React, {useState} from 'react'
import '../App.css'

const StateShowText = () => {
    const [showText, setShowText] = useState(true);

  return (
    <div className='App'>
        <button onClick={() => {setShowText(!showText)}}>
            Show/Hide
        </button>
        <br/>
        {showText && <h1>Hi There This is Aris</h1>}
    </div>
  )
}

export default StateShowText