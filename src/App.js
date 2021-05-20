import { useState, useEffect } from 'react';
import './App.css';

function B2({ log }) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    log(`B2 value: ${clicks}`)
  }, [clicks, log]);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (<button onClick={handleClick}>B2: {clicks}</button>);
}

function App() {
  const [clicks, setClicks] = useState(0);

  const log = (message) => {
    console.log(message);
  }

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>B1: {clicks}</button>
        <B2 log={log}/>
      </header>
    </div>
  );
}

export default App;
