import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [memberList, setMemberList] = useState([]);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form memberList={memberList} setMemberList={setMemberList} />
      <ul>
        {memberList.map(member => <li key={member.name}>{member.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
