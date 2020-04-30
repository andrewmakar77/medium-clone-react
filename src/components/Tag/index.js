import React from 'react';

export const Tag = ({tag}) => {
  return (
    <li key={tag} className="tag-default tag pill tag-outline">
      {tag}
    </li>
  )
}
