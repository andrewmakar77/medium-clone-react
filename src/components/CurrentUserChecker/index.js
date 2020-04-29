import React, { useEffect, useContext } from 'react';
import { useAxios, useLocalStorage } from 'hooks';
import { CurrentUserContext } from 'contexts';

export const CurrentUserChecker = ({children}) => {
  const [token] = useLocalStorage('auth-token');
  const [{response}, doFetch] = useAxios('user');
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  useEffect(() => {
    if (!token) {
      return;
    }

    doFetch();
    setCurrentUserState(state => ({
      ...state,
      isLoading: true,
      isLoggedIn: false
    }));
  }, [token, setCurrentUserState, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    };
    
    setCurrentUserState(state => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: response.user
    }));
  }, [response, setCurrentUserState]);


  return <>{children}</>;
}
