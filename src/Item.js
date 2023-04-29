import './Item.css';
import React, { useState } from 'react';

const defaultStyle = {
    transform: 'translateX(-10px)',
    backgroundColor: 'hsla(0, 0%, 0%, 25%)',
    // transition: '0s'
}

export default function Item(props) {
    const [style, setStyle] = useState(defaultStyle);

    function animate(e) {
        let rect = e.target.getBoundingClientRect();
        console.log(rect.height);
        let x = e.clientX - window.innerWidth/2;
        setStyle({
            transform: 'translateX('+(x/500)+'vw)',
            // transform: 'translateX(1vw)',
            backgroundColor: '',
            transition: '0.1s'
        });
    }

    return (
        <div onMouseMove={(e) => {animate(e)}} onMouseLeave={(e) => {setStyle(defaultStyle)}} style={style} className='item-container'>
        {/* <div onMouseLeave={onMouseEnter={update} style={style} className='item-container'> */}
            <div className='text-column'>
                <div className='item-title'>
                    {props.contents.title}
                </div>
                {props.contents.text}
            </div>
            <img className='item-image' src={props.contents.src} alt="img"></img>
        </div>
    );
}