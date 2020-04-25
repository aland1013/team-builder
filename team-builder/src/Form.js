import React, { useState, useEffect } from 'react';

const Form = ({ memberList, setMemberList, memberToEdit }) => {
  const [member, setMember] = useState({ name: '', email: '', role: '' });

  const handleChanges = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  }

  const submitForm = (e) => {
    e.preventDefault();
    setMemberList([...memberList, member]);
    setMember({ name: '', email: '', role: '' });
  }

  useEffect(() => {
    if(memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name: </label>
      <input 
        id="name" 
        type="text" 
        placeholder="name" 
        name="name"
        value={member.name}
        onChange={handleChanges}  
      /><br />
      <label htmlFor="email">Email: </label>
      <input 
        id="email" 
        type="email" 
        placeholder="email" 
        name="email" 
        value={member.email}
        onChange={handleChanges}
      /><br />
      <label htmlFor="role">Role: </label>
      <input 
        id="role" 
        type="text" 
        placeholder="role" 
        name="role" 
        value={member.role}
        onChange={handleChanges}
      /><br />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default Form;