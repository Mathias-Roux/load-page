import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoadding] = useState(true)

  useEffect (() => {
    setTimeout(() => setLoadding(false), 6000)
  }, [])

  return (
    <>
    {loading === false ? (
      <div className="App">
        <div className="Home">
          <h1 className="title">HI THERE!</h1>
          <p className="details">
            First <i>loading screen</i> made with React & Css
          </p>
        </div>
      </div>
    ) : (
          <LoadingScreen />
    )}
    </>
  );
}

export default App;
