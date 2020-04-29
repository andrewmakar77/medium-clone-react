import React from 'react';

export const ErrorMessages = ({errors}) => {
  const errorsList = Object.keys(errors).map((errKey) => {
    return <li key={errKey}>{`${errKey} ${errors[errKey].join(', ')}`}</li>;
  });
  
  return <ul className="error-messages">{errorsList}</ul>;
}
