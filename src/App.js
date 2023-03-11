import logo from './logo.svg';
import './App.css';
import React from 'react';

// functions cannot have state
// function App() {
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet"></link>
        
        <header className="App-header">
          <div className='title-container'>
            <p className='main-title'>Nathan Duggal</p>
            <div id="logo-wrapper">
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={logo} className="App-logo" alt="logo" />  
              </a>
            </div>
          </div>
          <div className='body-container'>
            
            <gradient-text>
              Edit <code>src/App.js</code> and save to reload.
            </gradient-text>
            <br></br>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
