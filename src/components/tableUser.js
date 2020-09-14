import React from 'react';

const TRow = ({data}) => {
  return (
    <tr>
      <th>{data.id}</th>
      <th>{data.firstName}</th>
      <th>{data.lastName}</th>
      <th>{data.email}</th>
      <th>{data.phone}</th>
    </tr>
  )
}

const TableUser = ({data}) => {
  return (
    <table className='table'> 
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phone</th>
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