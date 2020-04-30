import React from 'react';

export const ErrorMessage = ({text = 'Something went wrong'}) => {
  return (
    <div>
      {text}
    </div>
  )
}
