import logo from './logo.svg';
import './App.css';
import React from 'react';
import Item from './Item.js';
import { lasarContents, staryeastContents } from './media'

// functions cannot have state
// function App() {
class Projects extends React.Component {
  render() {
    return (
      
      <div className="App">
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text&family=Poppins:wght@600&display=swap" rel="stylesheet"></link>

        <div className='background-obj'></div>

        <header className="App-header">
          <div className='main-content'>
            <div className='title-containter'>
              <div className='title-and-logo'>
                <div id="logo-wrapper" onClick={() => window.location.href = "/"}>
                  <p className='main-title title-icon'>~/</p>
                </div>
                <p className='main-title'>Projects</p>
              </div>
            </div>
            <div className='body-container'>
                <Item contents={lasarContents}></Item>
                <Item contents={staryeastContents}></Item>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Projects;
