import React, { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';
import Loading from './components/loading';
import ErrorMessage from './components/errorMessage';
import TableUser from './components/tableUser';
import Pagination from './components/pagination';
import RenderUser from './components/renderUser'
import {cutResponse} from './utils';
import AddUserForm from './components/addUserForm';
import FilterUser from './components/filterUser';

const App = () => {
  const limit = 10;
  const [isSmal, setIsSmal] = useState(true);
  const total = isSmal ? 32 : 1000;

  const [{response, isLoading, error}, doFetch] = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterData, setFilterData] = useState([]);

  const [partData, setPartData] = useState();
  const [isOpendAddForm, setIsOpendAddForm] = useState(false);
  const [renderUser, setRenderUser] = useState(null);
  const [usersFilter, setUsersFilter] = useState('');
  
  const addUserInfo = (data) => {
    setPartData([ data, ...partData]);
    setIsOpendAddForm(false)
  }

  useEffect(() => {
    doFetch(isSmal)
  }, [doFetch, isSmal]);
  
  useEffect(() => {
    if(!response) return;
    if(!usersFilter) {
      setFilterData(response)
    } else {
      setFilterData(
        response.filter((el) => Object.values(el).join(' ').includes(usersFilter))
      );
    }
  }, [response, usersFilter])

  useEffect(() => {
    setPartData(cutResponse({response: filterData, currentPage, limit}))
  }, [filterData, currentPage])
  return (
    <div className='container page'>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-3">
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={e =>setIsSmal(true)}
              >Less data</button>
              <button
                className="btn btn-warning"
                onClick={e => setIsSmal(false)}
              >More data</button>
            </div>
            <button
              className="btn btn-success pull-xs-right"
              onClick={e => setIsOpendAddForm(true)}  
            >Add row</button>
          </div>
        </div>
        <div className="row">
          <div>
          {isOpendAddForm && (
            <>
              <hr/>
              <AddUserForm addUserInfo={addUserInfo}/>
            </>
          )}
          </div>
        </div>
        <div className="row">
          <div>
            <FilterUser filterUser={setUsersFilter}/>
          </div>
        </div>
      </div>
      

      <hr/>
      {isLoading && <Loading/>}
      {error &&<ErrorMessage/>}
      {!isLoading && response && (
        <TableUser data={partData} renderData={setRenderUser}/>
      )}
      {renderUser && (
        <RenderUser data={renderUser}/>
      )}
      <Pagination
        handleCurrentPage={setCurrentPage}
        currentPage={currentPage}
        limit={limit}
        total={total}
      />
    </div>
  );
}

export default App;