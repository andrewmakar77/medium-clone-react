import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FEED, HOME, TAGS } from 'constants/routes';
import { CurrentUserContext } from 'contexts';

export const FeedToggler = ({tagName}) => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {
          currentUserState.isLoggedIn && (
          <li className="nav-item">
            <NavLink className="nav-link" to={FEED}>
              Your Feed
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink className="nav-link" to={HOME} exact>
            Global Feed
          </NavLink>
        </li>
        {
          tagName && (
            <li className="nav-item">
              <NavLink className="nav-link" to={`${TAGS}/${tagName}`}>
                <i className="ion-pound"></i>
                {tagName}
              </NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
}
