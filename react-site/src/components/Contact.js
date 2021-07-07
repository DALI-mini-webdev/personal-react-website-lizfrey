import '../App.css';
import React, {Component} from 'react';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {name:"Click buttons on left for contact info."};
    }

    oCFunc = (id) => {
        this.setState({name: id});
    } 
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <button onClick={() => this.oCFunc("lizfrey")}>GitHub</button>       
                        </tr>
                        <tr>
                            <th> 
                                <button onClick={() => this.oCFunc("elizabeth.w.frey.24@dartmouth.edu")}>Email</button>
                            </th> 
                            <th>
                                <p id="contact">{this.state.name}</p>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button onClick={() => this.oCFunc("@lizwfrey")}>Instagram</button>
                            </th>  
                        </tr>
                    </tbody>   
                </table>       
            </div>
        )
    }
}

export default Contact