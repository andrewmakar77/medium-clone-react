import React from 'react';
import { NavLink } from 'react-router-dom';
import { LINKS_CONFIG } from './config';

const List = () => LINKS_CONFIG.map((link) => (
  <li className="nav-item" key={link.id}>
    <NavLink to={link.path} exact className="nav-link">{link.label}</NavLink>
  </li>
));

export const NavigationList = () => (
  <ul className="nav navbar-nav pull-xs-right">
    <List/>
  </ul>
);
