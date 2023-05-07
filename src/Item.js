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
        // let rect = e.target.getBoundingClientRect();
        // let x = e.clientX - rect.width/2;
        // let x = e.clientX - window.innerWidth/2;
        setStyle({
            // transform: 'translateX('+(x/500)+'vw)',
            transform: 'translateX(0.5vw)',
            backgroundColor: '',
            transition: '0.1s'
        });
    }

    // TODO: MAKE THIS LEFTALIGN ACTUALLY WORK
    return (
        <a
            href={props.contents.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div onMouseEnter={(e) => {animate(e)}} onMouseLeave={(e) => {setStyle(defaultStyle)}} style={style} className='item-container'>
            {/* <div onMouseLeave={onMouseEnter={update} style={style} className='item-container'> */}
                {/* <div className='img-column'>
                    {props.contents.rightsrc?.map(src => {
                        return <img className='item-image' src={src} alt=""></img>
                    })}
                </div> */}
                {props.contents.rightsrc && <img className='item-image' src={props.contents.rightsrc} alt="img"></img> }
                <div className='text-column'>
                    <div className='item-title'>
                        {props.contents.title}
                    </div>
                    {props.contents.text}
                </div>
                {/* <div className='img-column'>
                    {props.contents.leftsrc?.map(src => {
                        return <img className='item-image' src={src} alt=""></img>
                    })}
                </div> */}
                {props.contents.leftsrc && <img className='item-image' src={props.contents.leftsrc} alt="img"></img> }
            </div>
        </a>
    );
}