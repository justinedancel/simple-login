import React from 'react';
import './App.css';
import axios from 'axios';

import Login from './components/Login';

const App: React.FC = () => {

  const handleLoginSubmit = (username: string, password: string) => {
    // console.log(`Sending: '${username}' '${password}'`);

    axios.post(`https://localhost:7138/api/Auth/login`, {
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      alert(response.data);
    }).catch(error => {
      alert(error.response.data);
    });
  };

  return (
    <div className="App">
      <Login onLoginSubmit={handleLoginSubmit} />
    </div>
  );
}

export default App;