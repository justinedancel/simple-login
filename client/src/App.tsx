import React from 'react';
import './App.css';

import Login from './components/Login';

const App: React.FC = () => {

  const handleLoginSubmit = (username: string, password: string) => {
    console.log(`Form valid: ${username} ${password}`);
  };

  return (
    <div className="App">
      <Login onLoginSubmit={handleLoginSubmit} />
    </div>
  );
}

export default App;