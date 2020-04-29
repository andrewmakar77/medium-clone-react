import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LINKS_CONFIG } from './config';
import { CurrentUserContext } from 'contexts';

export const NavigationList = () => {
  const [currentUserState] = useContext(CurrentUserContext);

  return (
    <ul className="nav navbar-nav pull-xs-right">
      <li className="nav-item">
        <NavLink to={LINKS_CONFIG.home.path} className="nav-link" exact>{LINKS_CONFIG.home.label}</NavLink>
      </li>
      { !currentUserState.isLoggedIn ? 
        <>
          <li className="nav-item">
            <NavLink to={LINKS_CONFIG.login.path} className="nav-link">{LINKS_CONFIG.login.label}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={LINKS_CONFIG.register.path} className="nav-link">{LINKS_CONFIG.register.label}</NavLink>
          </li>
        </> :
        <>
          <li className="nav-item">
            <NavLink to={LINKS_CONFIG.articlesNew.path} className="nav-link">
              <i className="ion-compose"/>
              &nbsp;
              {LINKS_CONFIG.articlesNew.label}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={`${LINKS_CONFIG.profile.path}/${currentUserState.currentUser.username}`} className="nav-link">
              <img className="user-pic" src={currentUserState.currentUser.image} alt=""/>
              {currentUserState.currentUser.username}
            </NavLink>
          </li>
        </>
      }
    </ul>
  );
};
