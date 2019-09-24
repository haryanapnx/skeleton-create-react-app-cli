import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {isEmpty} from 'utils/'
import Footer from 'components/header';
import {error_message} from 'commons/toastify'

const App =()=> {

const [name, setName] = useState(false);

  useEffect(()=>{
    console.log('sini');
    error_message('coba error')
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
        {!isEmpty(name) && (
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
      <Footer version={'456.10'} />
    </div>
  );
}

export default App;
