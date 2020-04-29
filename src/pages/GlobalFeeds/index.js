import React, { useContext } from 'react';
import { CurrentUserContext } from 'contexts';

export const GlobalFeeds = () => {
  const [currentUserState] = useContext(CurrentUserContext)
  return (
    <>
    <div>GlobalFeeds</div>
    { currentUserState.currentUser && (<div>{ JSON.stringify(currentUserState) }</div>) }
    </>
  )
}
