import './App.css';
import ReactDOM from 'react-dom';
import cambodia from './assets/cambodia-elephant.jpg';
import me from './assets/ElizabethFrey.jpeg';
import grad from './assets/IMG_7078.jpeg';

function App(){
  var name;
  const buttonFunction = () =>{
    console.log("The button has been clicked.");
    ReactDOM.render(name, document.getElementById('name').innerHTML);
  }
  const onChangeFunction = (event) =>{
    console.log(event.target.value);
    name = event.target.value;
  }
  const greetingsList = ["Hi", "Hello"];
  const greetingsMap = greetingsList.map((greeting) => {
    return(
      <p>{greeting}</p>
    )
  });
  return (
    <div className="App">
        <h1>Elizabeth Frey's Personal Website</h1>

        <div className="sections">
          <h2 id="name">Introduce yourself!</h2>
          <input type="text" onChange={onChangeFunction}/>
          <button onclick={buttonFunction}>Click here to set name!</button>
          <div>{greetingsMap}</div>
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
            <p >Email: elizabeth.w.frey.24@dartmouth.edu</p>
            <p id="github">GitHub: lizwfrey</p>
        </div>
    </div>
  );
}

export default App;
