import React, {useState} from 'react'
import '../../App.css'

const Exercise = () => {
    const [count, setCount] = useState(0);

    const setIncraseCount = () => {
        setCount(count + 1);
    };

    const setDecraseCount = () => {
        setCount(count - 1);
    };

    const setToZero = () => {
        setCount(0);
    };
  return (
    <div className='App'>
        <button onClick={setIncraseCount}>Incrase</button>
        <button onClick={setDecraseCount}>Decrase</button>
        <button onClick={setToZero}>Set to Zero</button>
        <br/>
        {count}
    </div>
  )
}

export default Exercise