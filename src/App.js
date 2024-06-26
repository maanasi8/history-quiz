// App.js
import React, { useState } from 'react';
import './App.css';
import Quiz from './Components/Quiz';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const switchToRegister = () => {
    setShowRegister(true);
  };

  const switchToLogin = () => {
    setShowRegister(false);
  };

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>History Quiz</h1>
        {loggedInUser ? (
          <nav>
            <ul>
              {/* <li onClick={startQuiz}>Quiz</li>
              Add additional navigation items if needed */}
            </ul>
          </nav>
        ) : (
          <div>
            {showRegister ? (
              <Register handleRegister={() => setShowRegister(false)} switchToLogin={switchToLogin} />
            ) : (
              <Login handleLogin={handleLogin} switchToRegister={switchToRegister} />
            )}
          </div>
        )}
        {loggedInUser && !showQuiz && <Home startQuiz={startQuiz} />}
        {showQuiz && <Quiz />}
      </header>
    </div>
  );
}

export default App;