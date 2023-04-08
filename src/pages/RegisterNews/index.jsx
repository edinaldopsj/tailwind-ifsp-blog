import React from 'react';
import List from './List';
import { NEWS_LIST_MOCK } from '../../assets/mocks/news.mock';

function RegisterNews() {
  return (
    <List userNews={NEWS_LIST_MOCK} />
  );
}

export default RegisterNews;
