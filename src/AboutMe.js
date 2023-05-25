import logo from './logo.svg';
import {me, lasar, rj, solar} from './media'
import './App.css';
import React from 'react';
import Item from './Item.js';
import HeaderBar from './HeaderBar.js'

const aboutMeContents = {
  title: 'About Me',
  text: `I'm currently an undergrad at Georgia Tech studying Computer Science, and my primary areas 
        of interest are robotics and data-visulaization. I also really enjoy listening to music, performing
        with the campus orchestra, and indenitfying birds!`,
  // leftsrc: [me]
  leftsrc: me
}

const projectsContents = {
  title: 'Projects',
  text: `Check out my GitHub to see examples of projects I've worked on! 
        I have experience with web, desktop, and database development, and my projects range from 
        data-driven web-apps to augmented reality motion-capture.`,
  // rightsrc: [lasar, lasar]
  link: "https://github.com/NathanDuggal",
  rightsrc: lasar
}

const experienceContents = {
  title: 'Experience',
  text: `I always am looking to gain more industry experience, and right now I am exploring
        several different fields. `,
  link: "https://github.com/NathanDuggal",
  leftsrc: solar
}

const academicsContents = {
  title: 'Academics',
  text: `Some of my most valuable experience has come from the many academic teams and projects
        I've worked on. In addition to learning new technical skills, I have gained leadership
        experience and have been introduced to many project-management techniques.`,
  link: "https://github.com/NathanDuggal",
  rightsrc: rj
}


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
                <p className='main-title'>About Me</p>
                <div id="logo-wrapper">
                  <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo} className="App-logo" alt="logo" />  
                  </a>
                </div>
              </div>
            </div>
            <div className='body-container'>
              
              <div className='body-text'>
                I have had a passion for musical performance for a long time, in which I have picked up
                many instruments. My primary instrument nowadays is the clarinet, which I play for the Georgia
                Tech orchestra, but I have more recently been learning ukelele just for fun!
                <br/> <br/>
                Another intreest of mine has been watching and identifying birds. Birds never cease to amaze
                me with their incredible variety in both appearance and behavior, so over time I have learned about
                many distinguishing patterns and bonded with others over birdwatching.
                <br/> <br/>
                I have also enjoyed photography over the years. What started as documenting birds using my Dad's
                camera eventually to me exploring several other styles. While my main subject remains wildlife, I also
                have dabbled in landscapes, portraits, and astrophotography. 
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
