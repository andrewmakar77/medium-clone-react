import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'constants/routes';
import { NavigationList } from 'components';

export const TopBar = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to={HOME} className="navbar-brand">Medium</Link>
        <NavigationList/>
      </div>
    </nav>
  )
}
