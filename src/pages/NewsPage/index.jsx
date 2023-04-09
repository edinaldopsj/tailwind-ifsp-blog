import React, { Suspense } from 'react';
import NewsBody from '../../components/NewsBody';
import Loading from '../../components/Loading';
import { NEWS_DATA_MOCK } from '../../assets/mocks/news.mock';

function NewsPage() {
  // TODO: create the logic to fetch the news data from the API
  // const getNews = () => {};

  return (
    <Suspense fallback={<Loading />}>
      <NewsBody data={NEWS_DATA_MOCK} />
    </Suspense>
  );
}

export default NewsPage;
