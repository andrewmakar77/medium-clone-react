import React from 'react';
import { Link } from 'react-router-dom';
import { TAGS } from 'constants/routes';

export const PopularTag = ({tag}) => <Link to={`${TAGS}/${tag}`} className="tag-default tag-pill">{tag}</Link>
