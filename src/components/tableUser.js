import React, { useState } from 'react';
import { compare } from '../utils';

const TRow = ({data}) => {
  const {id, firstName, lastName, email, phone} = data;
  return (
    <tr>
      <th>{id}</th>
      <th>{firstName}</th>
      <th>{lastName}</th>
      <th>{email}</th>
      <th>{phone}</th>
    </tr>
  )
}

const TableUser = ({data}) => {
  const [isAbcId, setIsAbcId] = useState(false);
  const [isAbcFname, setIsAbcFname] = useState(false);
  const [isAbcLname, setIsAbcLname] = useState(false);
  const [isAbcEmail, setIsAbcEmail] = useState(false);
  const [isAbcPhone, setIsAbcPhone] = useState(false);

  const handleClick = (field, order) => {
    console.log('field: ', field);
    console.log('order: ', order);
    data.sort((a, b) => compare(a, b)(field, order));
    switch (field) {
      case 'id':
        setIsAbcId(!isAbcId);
        break;
      case 'firstName':
        setIsAbcFname(!isAbcFname);
        break;
      case 'lastName':
        setIsAbcLname(!isAbcLname);
        break;
      case 'email':
        setIsAbcEmail(!isAbcEmail);
        break;
      case 'phone':
        setIsAbcPhone(!isAbcPhone);
        break;
      default: return;
    }
  }

  return (
    <table className='table'> 
        <thead>
          <tr>
            <th onClick={(e) => handleClick('id', isAbcId)}>id</th>
            <th onClick={(e) => handleClick('firstName', isAbcFname)}>firstName</th>
            <th onClick={(e) => handleClick('lastName', isAbcLname)}>lastName</th>
            <th onClick={(e) => handleClick('email', isAbcEmail)}>email</th>
            <th onClick={(e) => handleClick('phone', isAbcPhone)}>phone</th>
          </tr>
        </thead>
        <tbody>
          {(
            data.map((el, index) => <TRow key={index} data={el}/>)
          )}
        </tbody>
      </table>
  )
}
export default TableUser;