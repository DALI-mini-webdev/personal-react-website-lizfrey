import React, { Component } from 'react';
import Firebase from '../firebase/index';
import '../App.css';

class NameCom extends Component {
    constructor(props) {
      super(props);
    }
  
    update = () => {
        this.props.update(this.props.id, this.state.name);
    }
  
    
    render() {
      return (
        <div>
          <p>{this.props.name}</p>
        </div>
      )
    }
  }
  
  export default NameCom;