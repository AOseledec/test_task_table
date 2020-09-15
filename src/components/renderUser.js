import React from 'react';

const RenderUser = ({data}) => {
  const {firstName, lastName, description = null, address = null} = data;

  return (
    <article>
      <label>Выбран пользователь <b>{`${firstName} ${lastName}`}</b></label>
      <div>
        <p>Описание:</p>
        <p>{description}</p>
      </div>
      {address && (
        <div>
          <p>Адрес проживания: <b>{address.streetAddress}</b></p>
          <p>Город: <b>{address.city}</b></p>
          <p>Провинция/штат: <b>{address.state}</b></p>
          <p>Индекс: <b>{address.zip}</b></p>
        </div>
      )}
    </article>
  )
}

export default RenderUser;