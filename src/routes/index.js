import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME, ARTICLES, LOGIN, REGISTER } from 'constants/routes';
import { GlobalFeeds, Articles, Auth } from 'pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path={HOME} component={GlobalFeeds} exact />
      <Route path={ARTICLES} component={Articles} />
      <Route path={LOGIN} component={Auth} />
      <Route path={REGISTER} component={Auth} />
    </Switch>
  )
}
