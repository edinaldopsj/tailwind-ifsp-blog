import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import NewsBody from '../../components/NewsBody';
import Loading from '../../components/Loading';

function NewsPage() {
  const newsData = useLoaderData();

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={newsData}
        errorElement={<div>Could not load news 😬</div>}
        children={(news) => (
          <NewsBody data={news} onComment onDeleteComment onEditComment />
        )}
      />
    </Suspense>
  );
}

export default NewsPage;
