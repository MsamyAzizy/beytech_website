// src/App.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import Home from './components/Home';
import Loader from './components/Loader'; // Import the Loader component
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    // Simulate a network request or content loading time
    const timer = setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 3500); // Adjust this duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show loader if still loading
      ) : (
        <Home /> // Show Home component when loading is complete
      )}
    </>
  );
}

export default App;