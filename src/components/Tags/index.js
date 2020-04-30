import React from 'react';
import { Tag } from 'components';

export const Tags = ({tags}) => {
  return (
    <ul className="tag-list">
      {tags.map(tag => <Tag tag={tag}/>)}
    </ul>
  )
}
