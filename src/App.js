// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// style
import './App.css';

// pages
import StateCounterPage from './Page/StateCounterPage';
import StateInputValuePage from './Page/StateInputValuePage';
import StateShowTextPage from './Page/StateShowTextPage';
import StateChangeColorPage from './Page/StateChangeColorPage';
import ExercisePage from './Page/ExercisePage';

function App() {
  return (
    <Router>
      <div className="navigation">
        <Link to='/'>State Counter</Link>
        <Link to='/inputValue'>State Input Value</Link>
        <Link to='/showText'>State Show Text</Link>
        <Link to='/changeColor'>State Change Color</Link>
        <Link to='/exercise'>Exercise</Link>
      </div>

      <Routes>
        <Route path='/' exact element={<StateCounterPage />}/>
        <Route path='/inputValue' exact element={<StateInputValuePage />}/>
        <Route path='/showText' exact element={<StateShowTextPage />}/>
        <Route path='/changeColor' exact element={<StateChangeColorPage />}/>
        <Route path='/exercise' exact element={<ExercisePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
