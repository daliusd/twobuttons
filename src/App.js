import { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import './App.css';

// useEventCallback
//
// Source: https://github.com/facebook/react/issues/14099
// As well read here: https://reactjs.org/docs/hooks-faq.html#how-to-avoid-passing-callbacks-down

function useEventCallback(fn) {
  let ref = useRef();
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return useCallback((...args) => (0, ref.current)(...args), []);
}

// App

function B2({ log }) {
  const [clicks, setClicks] = useState(0);
  const logCallback = useEventCallback(log);

  useEffect(() => {
    logCallback(`B2 value: ${clicks}`)
  }, [clicks, logCallback]);

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
