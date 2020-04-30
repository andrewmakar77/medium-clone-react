import React from 'react';
import { Link } from 'react-router-dom';
import { Tags } from 'components';
import { PROFILE, ARTICLES } from 'constants/routes';

export const Feed = ({article}) => (
  <div className="article-preview">
    <div className="article-meta">
      <Link to={`${PROFILE}/${article.author.username}`}>
        <img src={article.author.image} alt="" />
      </Link>
      <div className="info">
        <Link
          to={`${PROFILE}/${article.author.username}`}
          className="author"
        >
          {article.author.username}
        </Link>
        <span className="date">{article.createdAt}</span>
      </div>
    </div>
    <Link to={`${ARTICLES}/${article.slug}`} className="preview-link">
      <h1 className="text-truncate">{article.title}</h1>
      <p className="text-truncate">{article.description}</p>
      <span>Read more...</span>
      <Tags tags={article.tagList}/>
    </Link>
  </div>
)
