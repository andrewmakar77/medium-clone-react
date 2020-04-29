import { useState, useEffect, useCallback } from 'react';
import { httpClient } from 'core/axios';

export const useAxios = url => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = useCallback(
    (options = {}) => {
      setOptions(options);
      setIsLoading(true);
    },
    []
  );

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const fetchData = async () => {
      try {
        const { data } = await httpClient(url, options);        
        setResponse(data);
      } catch ({response: {data}}) {
        setErrors(data)
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [isLoading, url, options]);

  return [{isLoading, response, errors}, doFetch];
}