import React from 'react';
import '../App.css';

const Welcome = ({name}) => {
    return (
        <h2 id="name">Hello, {name}!</h2>
    )
}

export default Welcome;