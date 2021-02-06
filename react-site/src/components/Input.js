import React from 'react';
import '../App.css';

const InputTag = ({onChangeFunction}) => {
    return (
        <input type = 'text' onChange={onChangeFunction}></input>
    )
}

export default InputTag