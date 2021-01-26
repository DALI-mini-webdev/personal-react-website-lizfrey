import logo from './logo.svg';
import './App.css';

function App() {
  const buttonFunction = () =>{
    console.log("The button has been clicked.");
  }
  const onChangeFunction = (event) =>{
    console.log(event.target.value);
  }
  const greetingsList = ["Hi", "Hello"];
  const greetingsMap = greetingsList.map((greeting) => {
    return(
      <p>{greeting}</p>
    )
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

        <h1>Elizabeth Frey's Personal Website</h1>

        <div class="sections">
          <h2>Playing Around with React</h2>
          <button onclick={buttonFunction}>Click here!</button>
          <input type="text" onChange={onChangeFunction}/>
          <div>{greetingsMap}</div>
        </div>

        <div class="sections">
            <h2>About Me</h2>
            <p>Information on my childhood and what I am up to today!</p>
        </div>

        <div class="sections">
            <h2>Images of Me</h2>
            <p>A few pictures of me and my family.</p>
        </div>
        <div class="sectionsNoLink">
            <h2>Contact Information</h2>
            <p >Email: elizabeth.w.frey.24@dartmouth.edu</p>
            <p id="github">GitHub: lizwfrey</p>
        </div>
    </div>
  );
}

export default App;
