import React from 'react';

export const FavButton = ({favoritesCount}) => {
  return (
    <button className="btn btn-sm btn-outline-primary">
      <i className="ion-heart"></i>
      {favoritesCount}
    </button>
  )
}
