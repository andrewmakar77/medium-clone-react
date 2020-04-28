import { useState, useEffect } from 'react';
import { httpClient } from 'core/axios';

export const useAxios = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    try {
      const res = httpClient(url, options);
      setResponse(res.data)
    } catch (err) {
      setErrors(err.response.data)
    } finally {
      setIsLoading(false);
    }

  }, [isLoading]);

  return [{isLoading, response, errors}, doFetch];
}