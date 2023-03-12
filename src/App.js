import logo from './logo.svg';
import me from './media/me.jpg'
import './App.css';
import React from 'react';
import Item from './Item.js'

const item1contents = {
  title: 'About Me',
  text: `I'm currently an undergrad at the Georgia Institute of Technology 
        studying Computer Science with concentrations in Hardware and Simulation.
        I also play clarinet in the campus orchestra and know a copious amount of bird-facts!`,
  src: me
}


// functions cannot have state
// function App() {
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text&family=Poppins:wght@600&display=swap" rel="stylesheet"></link>

        <header className="App-header">
          <div className='inline-title'>
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
                Web-development extraordinaire. 
              </gradient-text>
              <div className='body-text'>
                This is my personal website and web-dev portfolio. Look at all the cool things I can do!
              </div>
              <Item contents={item1contents}></Item>
              <Item contents={''}></Item>
              <Item contents={''}></Item>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
