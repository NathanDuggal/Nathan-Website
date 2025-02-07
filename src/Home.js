import './App.css';
import React from 'react';
import Item from './Item.js';
import HeaderBar from './HeaderBar.js'
import { aboutMeContents, projectsContents, experienceContents, academicsContents } from './media'

// functions cannot have state
// function App() {
class Home extends React.Component {
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
                <p className='main-title'>Nathan Duggal</p> 
                <div id="logo-wrapper">
                  <a href="https://github.com/NathanDuggal/Nathan-Website">
                    <p className='main-title title-icon'>:~/</p>
                  </a>
                </div>
              </div>
              {/* TODO: FIGURE OUT WHAT WILL BE BEST HERE */}
              <HeaderBar></HeaderBar>
            </div>
            <div className='body-container'>
              
              {/* <div className='body-text'>
                This is my personal website and web-dev portfolio. Look at all the cool things I can do!
              </div> */}
              <Item contents={aboutMeContents}></Item>
              <Item contents={projectsContents}></Item>
              {/* <Item contents={experienceContents}></Item> */}
              {/* <Item contents={academicsContents}></Item> */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
