import React from "react";
import NewsBody from "../../components/NewsBody";
import { NEWS_MOCK } from "../../assets/mocks/news.mock";

export default function News() {
  const newsData = {
    id: 1,
    title: 'News Title',
    subtitle: 'News subtitle',
    author: 'News Author',
    updatedAt: '2020-01-01',
    content: NEWS_MOCK,
    likes: 10,
    dislikes: 20,
    comments: [
      {
        id: 1,
        createdAt: '2022-01-01',
        content: 'Comment 1',
        by: 'User 1',
      },
      {
        id: 2,
        createdAt: '2022-01-01',
        content: 'Comment 2',
        by: 'User 2',
      }
    ]
  }

  return <NewsBody data={newsData} />;
}
