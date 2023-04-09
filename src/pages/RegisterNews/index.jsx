import React from 'react';
import List from './List';
import { getUserNews } from '../../providers/news/user';

function RegisterNews() {
  const userNews = getUserNews();

  return (
    <List userNews={userNews} />
  );
}

export default RegisterNews;
