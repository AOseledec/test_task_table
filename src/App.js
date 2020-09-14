import React, { useEffect, useState } from 'react';

import useFetch from './hooks/useFetch';

function App() {
  const [{response, isLoading, error}, doFetch] = useFetch();
  const [isSmal, setIsSmal] = useState(true);
  
  useEffect(() => {
    doFetch()
  }, [doFetch])

  return (
    <div>
      {}
    </div>
  );
}

export default App;
