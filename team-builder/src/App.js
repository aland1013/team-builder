import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState(['Adam']);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <ul>
        {members.map(member => <li key={member}>{member}</li>)}
      </ul>
    </div>
  );
}

export default App;
