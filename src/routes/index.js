import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME, ARTICLES } from 'constants/routes';
import { GlobalFeeds, Articles } from 'pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path={HOME} component={GlobalFeeds} exact />
      <Route path={ARTICLES} component={Articles} />
    </Switch>
  )
}
