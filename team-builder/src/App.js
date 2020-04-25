import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [memberList, setMemberList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form 
        memberList={memberList} 
        setMemberList={setMemberList} 
        memberToEdit={memberToEdit} 
      />
      <div className="member-list">
        {memberList.map(member => (
          <div className="member" key={member.name}>
            <h2>{member.name}</h2>
            <p>{member.email}</p>
            <p className="role">{member.role}</p>
            <button className="edit-btn" onClick={() => setMemberToEdit(member)}>edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
