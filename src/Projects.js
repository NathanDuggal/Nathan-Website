import './App.css';
import React from 'react';
import Item from './Item.js';
import HeaderBar from './HeaderBar.js'
import { lasarContents, staryeastContents } from './media'
import { useNavigate } from 'react-router-dom'


export default function Projects(props) {

  const navigate = useNavigate();
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
                <div id="logo-wrapper" onClick={() => navigate('/')}>
                  <p className='main-title title-icon'>~/</p>
                </div>
                <p className='main-title'>Projects</p>
              </div>
              <HeaderBar></HeaderBar>
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
