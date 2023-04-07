import React from 'react';
import Wrapper from './components/layout/Wrapper';
import Title from './components/Title';
import { NEWS_LIST_MOCK } from './assets/mocks/news.mock';
import NewsList from './pages/NewsList';

export default function App() {
  // TODO: create function to get the news list from the API
  // const getAllNews = () => {};

  return (
    <Wrapper>
      {/* Main page title */}
      <Title title="IFSP - Dev News" />

      <NewsList news={NEWS_LIST_MOCK} />
    </Wrapper>
  );
}
