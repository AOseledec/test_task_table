import React, { useState } from 'react';

const AddUserForm = ({addUserInfo}) => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserInfo(
      {
        id: Date.now(),
        firstName,
        lastName,
        email,
        phone
      }
    )
  }
  return (
    <form onSubmit={handleSubmit} className='form'>
      <fieldset>
        <fieldset className='form-group'>
          <input
            type="text"
            placeholder='First name'
            valeu={firstName}
            onChange={e => setFirstName(e.target.value)}/>
        </fieldset>
        <fieldset className='form-group'>
          <input
            type="text"
            placeholder='Last name'
            valeu={lastName}
            onChange={e => setLastName(e.target.value)}/>
        </fieldset>
        <fieldset className='form-group'>
          <input
            type="text"
            placeholder='Email'
            valeu={email}
            onChange={e => setEmail(e.target.value)}/>
        </fieldset>
        <fieldset className='form-group'>
          <input
            type="text"
            placeholder='Phone'
            valeu={phone}
            onChange={e => setPhone(e.target.value)}/>
        </fieldset>
      </fieldset>
      <button type='submit' disabled={!(firstName && lastName && email && phone)}>Insert</button>
    </form>
  )
}

export default AddUserForm