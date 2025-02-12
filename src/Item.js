import './Item.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function Item(props) {

    console.log(props.contents.hidetext);

    const defaultBoxStyle = {
        transform: 'translateX(-10px)',
        backgroundColor: 'hsla(0, 0%, 0%, 25%)',
    }
    const hoverBoxStyle = {
        // transform: 'translateX('+(x/500)+'vw)',
        transform: 'translateX(0.5vw)',
        backgroundColor: '',
        transition: '0.1s'
    }

    const defaultTitleStyle = {
        textAlign: 'center',
        animation: `subtleColorChange 5s infinite`, 
        animationDelay: `${props.contents.colorchange}s`,
        transition: '0.3s'
    }
    const hoverTitleStyle = {
        fontSize: 32,
        margin: '0 0 0 0',
        transition: '0.1s'
    }
    
    const defaultTextStyle = {
        fontSize: 0,
        transition: '0.3s'
    }
    const hoverTextStyle = {
        fontSize: 24,
        display: 'block',
        transition: '0.2s'
    }

    const [boxStyle, setBoxStyle] = useState(defaultBoxStyle);
    const [titleStyle, setTitleStyle] = useState(defaultTitleStyle);
    const [textStyle, setTextStyle] = useState(defaultTextStyle);
    const navigate = useNavigate();

    function animate(e) {
        setBoxStyle(hoverBoxStyle);
        setTitleStyle(hoverTitleStyle);
        setTextStyle(hoverTextStyle);
    }

    function reset(e) {
        setBoxStyle(defaultBoxStyle);
        setTextStyle(defaultTextStyle);
        setTitleStyle(defaultTitleStyle);
    }

    // TODO: MAKE THIS LEFTALIGN ACTUALLY WORK
    return (
        <div className='item-space'>
            <a
                // href={process.env.PUBLIC_URL + props.contents.link}
                onClick={() => {
                    if (props.contents.link.includes('http')) {
                        window.open(props.contents.link)
                    } else {
                        navigate(props.contents.link)
                    }
                }}
                // target="_blank"
                rel="noopener noreferrer"
            >
                <div onMouseEnter={(e) => {animate(e)}} onMouseLeave={(e) => {reset(e)}} style={boxStyle} className='item-container'>
                    {props.contents.rightsrc && <img className='item-image' src={props.contents.rightsrc} alt="img"></img> }
                    <span className='text-column'>
                        <div style={props.contents.hidetext ? titleStyle : hoverTitleStyle} className='item-title'>
                            {props.contents.title}
                        </div>
                        <div style={props.contents.hidetext ? textStyle : hoverTextStyle} className='item-text'>
                            {props.contents.text}
                        </div>
                    </span>
                    {props.contents.leftsrc && <img className='item-image' src={props.contents.leftsrc} alt="img"></img> }
                </div>
            </a>
        </div>
    );
}