import React, { useState } from 'react';

const FilterUser = ({filterUser}) => {
  const [filter, setFilter] = useState('');
  
  return (
    <div>
      <input type="text" placeholder='Filter' value={filter} onChange={(e) =>setFilter(e.target.value)}/>
      <button onClick={() => filterUser(filter)}>Finde</button>
    </div>
  )
}

export default FilterUser;