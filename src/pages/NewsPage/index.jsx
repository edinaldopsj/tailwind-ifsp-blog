import React from 'react';
import NewsBody from '../../components/NewsBody';
import { NEWS_DATA_MOCK } from '../../assets/mocks/news.mock';

function NewsPage() {
  // TODO: create the logic to fetch the news data from the API
  // const getNews = () => {};

  return <NewsBody data={NEWS_DATA_MOCK} />;
}

export default NewsPage;
