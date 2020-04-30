import React, { useEffect } from 'react';
import { Banner, Feeds, ErrorMessage, Loading } from 'components';
import { useAxios } from 'hooks';
import { PopularTags, FeedToggler } from 'components';

export const GlobalFeeds = () => {
  const apiUrl = 'articles?limit=10&offset=0';
  const [{isLoading, response, errors}, doFetch] = useAxios(apiUrl);
  
  useEffect(() => {
    doFetch();
  }, [doFetch])

  return (
    <>
      <Banner/>
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggler/>
              {isLoading && <Loading/>}
              {errors && <ErrorMessage/>}
              {!isLoading && response && <Feeds articles={response.articles} />}
            </div>
            <div className="col-md-3">
              <PopularTags/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
