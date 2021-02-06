import '../App.css';
import React, {Component} from 'react';
import InputTag from './Input';
import Welcome from './Welcome';

class Name extends Component{
    constructor(props){
        super(props);
        this.state = {name:"introduce yourself"}
    }

    onChangeFunction = (event) => {
        this.setState({name:event.target.value});
    }

    render(){
        return(
            <div>
            <Welcome name = {this.state.name}/>
            <InputTag onChangeFunction = {this.onChangeFunction}/>
            </div>
        )
    }
}

export default Name