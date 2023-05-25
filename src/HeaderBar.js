import './HeaderBar.css';
import React, { useState, useEffect } from 'react';

const defaultStyle = {
    backgroundPosition: '35% 0%'
    // transition: '0s'
}

export default function Item(props) {
    const [style, setStyle] = useState(defaultStyle);

    const [lockSize, setLockSize] = useState(false);
  
    useEffect(() => {
        // set initial value
        const mediaWatcher = window.matchMedia("(min-width: 741px)")
        setLockSize(mediaWatcher.matches);

        //watch for updates
        function updateLockSize(e) {
            setLockSize(e.matches);
        }
        mediaWatcher.addEventListener('change', updateLockSize)

        // clean up after ourselves
        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateLockSize)
        }
    }, []);

    function animate(e) {
        // const widthQuery = window.matchMedia("(min-width: 741px)");
        
        if (lockSize) { // If media query matches
            let x = e.clientX - window.innerWidth/2;
            setStyle({
                backgroundPosition: ''+(x-1175)+'px'
            });
          } else {
            let x = 100*(e.clientX - window.innerWidth/2)/window.innerWidth // x in vw
            console.log(x);
            setStyle({
                backgroundPosition: ''+(x - 150)+'vw'
            });
        }
    }

    return (
        <div className='header-space'>
            <div onMouseMove={(e) => {animate(e)}} onMouseLeave={(e) => {setStyle(defaultStyle)}} style={style} className='gradient-text'>
                <a
                    href="https://www.linkedin.com/in/nathan-duggal/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <span>LinkedIn 🔗</span> */}
                    🔗 LinkedIn 
                </a>
                <a
                    href="https://github.com/NathanDuggal"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <span>GitHub 🖳</span> */}
                    🖳 GitHub
                </a>
                <a
                    href="https://docs.google.com/document/d/1T9fzq1zK2DYT1WOXZZMmOunchzCJGvzSPhRwzm0OHQA/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {/* <span>Resume 🔧</span> */}
                    🔧 Resume
                </a>
                {/* Web-development extraordinaire.  */}
            </div>
        </div>
    );
}