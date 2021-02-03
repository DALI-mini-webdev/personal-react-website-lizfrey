import '../App.css';
import React, {Component} from 'react';

class Name extends Component{
    constructor(props){
        super(props);
        this.state = {name:""}
    }

    onChangeFunction = (event) => {
        this.setState({name:event.target.value})
    }

    render(){
        return(
            <p>{this.name}</p>
        )
    }
}

export default Name