import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';
import username from './routes/username';
import { useState } from 'react';
function App() {
  const [currentUser,setCurrentUser] = useState<any>('');
  useEffect(()=> {
    setCurrentUser(window.localStorage.getItem('username'));
  },[])
  function reset(){
    localStorage.clear();
    setCurrentUser('')
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Link className='padding' to='/login'>Login</Link>
      <Link className='padding' to='/signup'>Signup</Link>
      <div className='username'>
        <Link to={`username/${localStorage.getItem('username')}`} >{localStorage.getItem('username') ? `${localStorage.getItem('username')}` : ''}</Link>
      </div>
      <button onClick={reset}>Logout</button>
    </div>
  );
}

export default App;
