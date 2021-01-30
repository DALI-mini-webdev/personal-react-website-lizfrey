import './App.css';
import ReactDOM from 'react-dom';

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
