import '../App.css';
import React, {Component} from 'react';
import InputTag from './Input';
import Welcome from './Welcome';
import NameCom from './NameCom';
import Firebase from '../firebase/index';

class Name extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"introduce yourself",
            names: [],
            id:0,
        }
    }

    onChangeFunction = (event) => {
        this.setState({name:event.target.value});
    }

    saveNewName = () => { 
        Firebase.db.collection('names').add({
          name:this.state.name,
          id: this.state.id
        }).then(ref => {
          console.log('document reference ID', ref.id)
          this.setState({
            id: this.state.id + 1,
          });
          }).catch(error => {
        console.log(error.message)
        });
    }

    fetchNames = () => {
        const newNames = [];
        Firebase.db.collection('todo').get()
          .then(querySnapshot => {
            querySnapshot.forEach( doc => {
              console.log(doc.data());
              this.setState({
              newNames: [...doc.data()]
              })
              newNames.push(doc.data());
            })
          }).then(() => {
            this.setState({
              names: newNames
            });
            console.log(this.state.newNames);
          })
          .catch(err => {
            console.log(err.message)
          })
      }

    render(){
        const names = this.state.names;
        const allNames = names.map((namee) => {
            return (
              <NameCom
                name={namee.name}
                id={namee.id}
              />
            );
          }
        );
        return(
            <div>
            <Welcome name = {this.state.name}/>
            <InputTag onChangeFunction = {this.onChangeFunction}/>
            {allNames}
            </div>
        )
    }
}

export default Name