import React, { useState } from 'react';
import { compare } from '../utils';

const TRow = ({data, renderData}) => {
  const {id, firstName, lastName, email, phone} = data;
  return (
    <tr onClick={() => renderData(data)}>
      <th>{id}</th>
      <th>{firstName}</th>
      <th>{lastName}</th>
      <th>{email}</th>
      <th>{phone}</th>
    </tr>
  )
}

const TableUser = ({data, renderData}) => {
  const [isAbcId, setIsAbcId] = useState(false);
  const [isAbcFname, setIsAbcFname] = useState(false);
  const [isAbcLname, setIsAbcLname] = useState(false);
  const [isAbcEmail, setIsAbcEmail] = useState(false);
  const [isAbcPhone, setIsAbcPhone] = useState(false);

  const handleClick = (field, order) => {
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
            <th onClick={() => handleClick('id', isAbcId)}>id&nbsp;{isAbcId ? '↑' : '↓'}</th>
            <th onClick={() => handleClick('firstName', isAbcFname)}>firstName&nbsp;{isAbcFname ? '↑' : '↓'}</th>
            <th onClick={() => handleClick('lastName', isAbcLname)}>lastName&nbsp;{isAbcLname ? '↑' : '↓'}</th>
            <th onClick={() => handleClick('email', isAbcEmail)}>email&nbsp;{isAbcEmail ? '↑' : '↓'}</th>
            <th onClick={() => handleClick('phone', isAbcPhone)}>phone&nbsp;{isAbcPhone ? '↑' : '↓'}</th>
          </tr>
        </thead>
        <tbody>
          {(
            data.map((el, index) => <TRow key={index} data={el} renderData={renderData}/>)
          )}
        </tbody>
      </table>
  )
}
export default TableUser;