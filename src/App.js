import React, { useState, useEffect, useReducer, useContext } from 'react';
import './App.css';

function reducer(state, action) {
  switch (action.type) {
    case 'setMessage':
      return {message: action.message};
    default:
      throw new Error();
  }
}

const MessageDispatch = React.createContext(null);

// App

function B2({ log }) {
  const [clicks, setClicks] = useState(0);
  const dispatch = useContext(MessageDispatch);

  useEffect(() => {
    dispatch({ type: 'setMessage', message: `B2 value: ${clicks}` })
  }, [clicks, dispatch]);

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  return (<button onClick={handleClick}>B2: {clicks}</button>);
}

function App() {
  const [state, dispatch] = useReducer(reducer, { message: '' });
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    if (state.message) {
      console.log(state.message);
    }
  }, [state.message])

  const handleClick = () => {
    setClicks(clicks + 1);
  }

  // useEffect(() => {
  //   dispatch({ type: 'setMessage', message: `B1 value: ${clicks}` })
  // }, [clicks]);

  return (
    <MessageDispatch.Provider value={dispatch}>
      <div className="App">
        <header className="App-header">
          <button onClick={handleClick}>B1: {clicks}</button>
          <B2/>
        </header>
      </div>
    </MessageDispatch.Provider>
  );
}

export default App;
