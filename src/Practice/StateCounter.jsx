import React, {useState} from 'react'
import '../App.css'

const StateCounter = () => {
    const [age, setAge] = useState(0);

    const incraseAge = () => {
        setAge(age + 1);
    };

    const decraseAge = () => {
        setAge(age - 1);
    };

  return (
    <div className='App'>
        <button onClick={decraseAge}>Decrase Age</button>
        {age}
        <button onClick={incraseAge}>Incrase Age</button>
    </div>
  )
}

export default StateCounter