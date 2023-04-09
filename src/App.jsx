import React, { Suspense } from 'react';
import Wrapper from './components/layout/Wrapper';
import Loading from './components/Loading';
import NewsList from './pages/NewsList';

import { NEWS_LIST_MOCK } from './assets/mocks/news.mock';

export default function App() {
  const news = NEWS_LIST_MOCK;

  // TODO: create a function to get the latest news
  // const latestNews = () => NEWS_LIST_MOCK;

  return (
    <Wrapper>
      <Suspense fallback={<Loading />}>
        <NewsList news={news} />
      </Suspense>
    </Wrapper>
  );
}
