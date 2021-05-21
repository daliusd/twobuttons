import React, { useState, useEffect, useContext } from 'react';
import './App.css';

// Logger

function Logger() {
  return {
    log: (message) => {
      console.log(message);
    }
  }
}

// Logger with hooks

const LoggerContext = React.createContext(null);

export const LoggerProvider = ({ children }) => {
  const [logger] = useState(() => Logger());

  return <LoggerContext.Provider value={logger}>{children}</LoggerContext.Provider>;
};

export const useLogger = () => {
  return useContext(LoggerContext);
};

// App

function B2() {
  const [clicks, setClicks] = useState(0);

  const logger = useLogger();

  useEffect(() => {
    logger.log(`B2 value: ${clicks}`)
  }, [logger, clicks]);

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
    <LoggerProvider>
      <div className="App">
        <header className="App-header">
          <button onClick={handleClick}>B1: {clicks}</button>
          <B2 />
        </header>
      </div>
    </LoggerProvider>
  );
}

export default App;
