import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { hum, owl } from './media' 

// functions cannot have state
// function App() {
class AboutMe extends React.Component {
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
                <p className='main-title'>About Me</p>
              </div>
            </div>
            <div className='body-container'>
              
              <div className='body-text'>
                I have had a passion for musical performance for a long time, in which I have picked up
                many instruments. My primary instrument nowadays is the clarinet, which I play for the Georgia
                Tech orchestra, but I have more recently been learning ukulele just for fun!
                
                <br/> <br/>
                Another intrest of mine has been watching and identifying birds. Birds never cease to amaze
                me with their incredible variety in both appearance and behavior, so over time I have learned about
                many distinguishing patterns and bonded with others over birdwatching.
                <div className='page-image-container'>
                  <img className='page-image' src={hum}></img>
                  <img className='page-image' src={owl}></img>
                </div>
                <br/>
                I have also enjoyed photography over the years. What started as documenting birds using my Dad's
                camera eventually to me exploring several other styles. While my main subject remains wildlife, I continue
                to learn about landscapes, portraits, and astrophotography. 
              </div>
              {/* <Item contents={aboutMeContents}></Item> */}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default AboutMe;
