import './Item.css';
import React, { useState } from 'react';

const defaultStyle = {
    transform: 'translateX(-10px)',
    backgroundColor: 'hsla(0, 0%, 0%, 25%)'
}

export default function Item(props) {
    const [style, setStyle] = useState(defaultStyle);

    function animate(e) {
        let rect = e.target.getBoundingClientRect();
        console.log(rect.height);
        let x = e.clientX - rect.width; //x position within the element.
        let y = e.clientY - rect.height;
        setStyle({
            transform: 'translate('+(x/100)+'px,'+(-y/100)+'px)',
            // transform: 'translateY(40px)',
            backgroundColor: '',
            transition: ''
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