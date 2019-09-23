import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import {isEmpty} from 'utils'

const App =()=> {

const [name, setName] = useState(false);

  useEffect(()=>{
    console.log('sini');
  })

  const changeName =()=>{
    setName(!name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>{name}</code> and save to reload.
        </p>
        <button onClick={changeName}>click</button>
        {(name) && (
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        )}
      </header>
    </div>
  );
}

export default App;
