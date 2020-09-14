import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

export default () => {
  const smalDataUrl = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
  const bigDataUrl = 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [typeUrl, setTypeUrl] = useState(null)

  const doFetch = useCallback((typeUrl) => {
    setTypeUrl(typeUrl ? smalDataUrl : bigDataUrl)
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

    if (!isLoading || !typeUrl) return;

    axios(typeUrl)
      .then( res => {
        if (!skipGetResponseAfterDestroy) {
          setResponse(res.data)
          setIsLoading(false);
        }
      })
      .catch( err => {
        if (!skipGetResponseAfterDestroy) {
          setError(err.response.data)
          setIsLoading(false);
        }
      });

      return () => {
        skipGetResponseAfterDestroy = true;
      }
  }, [isLoading]);

  return [{isLoading, response, error}, doFetch]
}