import logo from './logo.svg';
import me from './media/me.jpg';
import lasar from './media/demo_gif.gif';
import './App.css';
import React from 'react';
import Item from './Item.js';

const aboutMeContents = {
  title: 'About Me',
  text: `I'm currently an undergrad at the Georgia Institute of Technology 
        studying Computer Science, and my primary areas of interest are robotics and data-visulaization.
        I also really like music, play in the campus orchestra, and can tell you all about birds!`,
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


// functions cannot have state
// function App() {
class App extends React.Component {
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
                  <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={logo} className="App-logo" alt="logo" />  
                  </a>
                </div>
              </div>
              {/* TODO: FIGURE OUT WHAT WILL BE BEST HERE */}
              <gradient-text>
                <a
                  href="https://www.linkedin.com/in/nathan-duggal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <span>LinkedIn 🔗</span> */}
                  LinkedIn 🔗
                </a>
                <a
                  href="https://github.com/NathanDuggal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <span>GitHub 🖳</span> */}
                  GitHub 🖳
                </a>
                <a
                  href="https://docs.google.com/document/d/1T9fzq1zK2DYT1WOXZZMmOunchzCJGvzSPhRwzm0OHQA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <span>Resume 🔧</span> */}
                  Resume 🔧
                </a>
                {/* Web-development extraordinaire.  */}
              </gradient-text>
            </div>
            <div className='body-container'>
              
              {/* <div className='body-text'>
                This is my personal website and web-dev portfolio. Look at all the cool things I can do!
              </div> */}
              <Item contents={aboutMeContents} leftAlign={true}></Item>
              <Item contents={projectsContents} leftAlign={false} ></Item>
              <Item contents={''} leftAlign={true}></Item>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
