/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import { useAxios, useLocalStorage } from 'hooks';
import { CurrentUserContext } from 'contexts';

export const CurrentUserChecker = ({children}) => {
  const [token] = useLocalStorage('auth-token');
  const [{isLoading, response}, doFetch] = useAxios('user');
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      return;
    }
    
    doFetch();
    setCurrentUserState(state => ({
      ...state,
      isLoading
    }));
  }, []);

  useEffect(() => {
    if (!response) {
      return;
    };
    
    setCurrentUserState(state => ({
      ...state,
      isLoading,
      isLoggedIn: true,
      currentUser: response.user
    }));
  }, [response]);


  return <>{children}</>;
}
