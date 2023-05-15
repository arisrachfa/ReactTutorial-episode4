import React,{useState} from 'react'
import '../App.css'

const StateChangeColor = () => {
    const [textColor, setTextColor] = useState("black");

  return (
    <div className='App'>
        <button 
            onClick={() => {
                setTextColor(textColor === "black" ? "red" : "black")
            }}>
            Change Color
        </button>

        <h1 style={{color: textColor}}> Hi My Name is Aris</h1>
    </div>
  )
}

export default StateChangeColor
