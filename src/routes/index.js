import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HOME, ARTICLES, LOGIN, REGISTER, TAGS, ARTICLE_NEW, PROFILE, FEED } from 'constants/routes';
import { GlobalFeeds, Articles, Auth, TagFeed, YourFeed } from 'pages';

export const Routes = () => {
  return (
    <Switch>
      <Route path={HOME} component={GlobalFeeds} exact />
      <Route path={LOGIN} component={Auth} />
      <Route path={REGISTER} component={Auth} />
      <Route path={`${ARTICLES}/:slug`} component={Articles} />
      <Route path={`${TAGS}/:slug`} component={TagFeed} />
      <Route path={ARTICLE_NEW} component={() => <div>NEW ARTICLE</div>} />
      <Route path={PROFILE} component={() => <div>PROFILE</div>} />
      <Route path={FEED} component={YourFeed} />
    </Switch>
  )
}
