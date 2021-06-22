import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello World.
        </h2>
      </div>
        <p
          className="App-link">
        </p>
      <a href="/auth/google"> Sign in with Google</a>
    </div>
  );
}

export default App;