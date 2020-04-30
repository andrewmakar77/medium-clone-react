import React, { useEffect } from 'react';
import { Banner, Feeds, ErrorMessage, Loading, EmptyList } from 'components';
import { useAxios } from 'hooks';
import { PopularTags, FeedToggler } from 'components';
import { useParams } from 'react-router-dom';

export const TagFeed = () => {
  const {slug: tagName} = useParams();
  
  const apiUrl = `articles?tag=${tagName}&limit=10&offset=0`;
  const [{isLoading, response, errors}, doFetch] = useAxios(apiUrl);
  
  useEffect(() => {
    doFetch();
  }, [tagName, doFetch])

  return (
    <>
      <Banner/>
      <div className="home-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedToggler tagName={tagName}/>
              {isLoading && <Loading/>}
              {errors && <ErrorMessage/>}
              {!isLoading && response && !response.articles.length && <EmptyList/>}
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
