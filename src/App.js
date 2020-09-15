import React, { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';
import Loading from './components/loading';
import ErrorMessage from './components/errorMessage';
import TableUser from './components/tableUser';
import Pagination from './components/pagination';
import RenderUser from './components/renderUser'
import {cutResponse} from './utils';

const App = () => {
  const [{response, isLoading, error}, doFetch] = useFetch();
  const [isSmal, setIsSmal] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [partData, setPartData] = useState();
  const [isOpendAddForm, setIsOpendAddForm] = useState(false);
  const [renderUser, setRenderUser] = useState(null)
  const limit = 10;
  const total = isSmal ? 32 : 1000;

  useEffect(() => {
    doFetch(isSmal)
  }, [doFetch, isSmal]);

  useEffect(() => {
    if(!response) return;
    setPartData(cutResponse({response, currentPage, limit}))
  }, [response, currentPage])

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
      </div>
      {isOpendAddForm && (
        <>
          <hr/>
          <form className='form'>
            <fieldset>
              <fieldset className='form-group'>
                <input type="text" placeholder='' valeu={''} onChange={''}/>
              </fieldset>
              <fieldset className='form-group'>
                <input type="text" placeholder='' valeu={''} onChange={''}/>
              </fieldset>
              <fieldset className='form-group'>
                <input type="text" placeholder='' valeu={''} onChange={''}/>
              </fieldset>
              <fieldset className='form-group'>
                <input type="text" placeholder='' valeu={''} onChange={''}/>
              </fieldset>
            </fieldset>
          </form>
        </>
      )}

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