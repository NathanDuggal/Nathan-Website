import './Item.css';
import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className='item-container'>
                <div className='text-column'>
                    <div className='item-title'>
                        {this.props.contents.title}
                    </div>
                    {this.props.contents.text}
                </div>
                <img className='item-image' src={this.props.contents.src} alt="img"></img>
            </div>
        );
    }
}

export default Item;
