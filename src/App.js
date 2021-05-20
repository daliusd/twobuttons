import { useState } from 'react';
import './App.css';

function B2() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (<button onClick={handleClick}>B2: {clicks}</button>);
}

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>B1: {clicks}</button>
        <B2/>
      </header>
    </div>
  );
}

export default App;
