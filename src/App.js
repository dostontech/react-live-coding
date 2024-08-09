import logo from './logo.svg';
import './App.css';
import ToggleSwitch from './challenge/ToggleSwitch';
import Counter from './challenge/Counter';
import FetchApi from './challenge/FetchApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>[20 Coding Chalange in REACT]</code>
        </p>
      </header>
      <body>
        <Counter/>
        <ToggleSwitch />
        <FetchApi/>
      </body>
    </div>
  );
}

export default App;
