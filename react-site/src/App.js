import './App.css';
import cambodia from './assets/cambodia-elephant.jpg';
import me from './assets/ElizabethFrey.jpeg';
import grad from './assets/IMG_7078.jpeg';
import Navbar from './components/Navbar/Navbar';
import Name from './components/Name'
import Contact from './components/Contact'
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={page:"home"};
  }

  render(){
    if(this.state.page === "home"){
      return(
      <div className="App">
        <Navbar />
          <h1>My Personal Website</h1>
          <div className="sections">
            <Name />
          </div>
          <div className="sections">
              <h2>About Me</h2>
              <p>Information on my childhood and what I am up to today!</p>
          </div>

          <div className="sections">
              <h2>Images of Me</h2>
              <p>A few pictures of me and my family.</p>
              <div class="sections" id="images">
              <h2>Images</h2>
              <p>Hover over each image to get a larger view.</p>
              <div className="gallery">
                  <img src={me} alt="me"></img>
                  <div className="description">This is my senior portrait!</div>
              </div>
              <div className="gallery">
                  <img src={cambodia} alt="my family and me in Cambodia"></img>
                  <div className="description">This is me and my family in Cambodia.</div>
              </div>
              <div className="gallery">
                  <img src={grad} alt="my graduation"></img>
                  <div className="description">This is my high school graduation.</div>
              </div>
              </div>
          </div>
          <div className="sectionsNoLink">
            <h2>Contact Information</h2>
              <Contact />
          </div>
      </div>
      );
    }
    else{
      return(
        <div>
          Other Page
        </div>
      )
    }
  }
}

export default App;
