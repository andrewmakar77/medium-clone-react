import React from 'react';
import { Feed } from 'components';

export const Feeds = ({articles}) => {
  const feedsList = articles.map((article) => <Feed key={article.slug} article={article}/>);

  return (
    <div>
      {feedsList}
    </div>
  );
}
