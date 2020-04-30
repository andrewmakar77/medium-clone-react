import React from 'react';
import { Tag } from 'components';

export const Tags = ({tags}) => {
  return (
    <ul className="tag-list">
      {tags.map((tag, index) => <Tag key={tag + index} tag={tag}/>)}
    </ul>
  )
}
