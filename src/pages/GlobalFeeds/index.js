import React, { useEffect } from 'react';
import { Banner, Feeds } from 'components';
import { useAxios } from 'hooks';

export const GlobalFeeds = () => {
  const apiUrl = 'articles?limit=10&offset=0';
  const [{isLoading, response, errors}, doFetch] = useAxios(apiUrl);
  
  useEffect(() => {
    doFetch();
  }, [doFetch])

  return (
    <>
      <Banner/>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            {isLoading && <div>Loading...</div>}
            {errors && <div>Something went wrong!</div>}
            {!isLoading && response && <Feeds articles={response.articles} />}
          </div>
          <div className="col-md-3">Popular tags</div>
        </div>
      </div>
    </>
  )
}
