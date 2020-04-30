import React, { useEffect } from 'react';
import { useAxios } from 'hooks';
import { Loading } from 'components';
import { ErrorMessage } from 'components/ErrorMessage';
import { PopularTag } from 'components/PopularTag';

export const PopularTags = () => {
  const [{ isLoading, response, errors }, doFetch] = useAxios('/tags');

  useEffect(() => {
    doFetch();
  }, [doFetch])
  
  if (isLoading || !response) {
    return <Loading/>
  }

  if (errors) {
    return <ErrorMessage/>
  }
  
  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      <div className="tag-list">
        { response.tags.map((tag, index) => <PopularTag key={tag + index} tag={tag}/>) }
      </div>
    </div>
  )
}
