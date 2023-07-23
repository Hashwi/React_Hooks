import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
 const [user, setUser]  = useState('Hash')
 
//  useEffect(()=> {

//  }, [])

 const clickHandler = () => {
  setUser(user)
 }

 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        {user}
        <button onClick={clickHandler}>Click</button>
      </header>
    </div>
  );
}
 

export default App;
