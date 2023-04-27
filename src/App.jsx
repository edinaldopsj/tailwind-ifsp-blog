import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import Wrapper from './components/layout/Wrapper';
import Loading from './components/Loading';

import NewsList from './pages/NewsList';
import ErrorPage from './pages/ErrorPage';

import { ERROR_MESSAGES } from './lang/pt-br/errors';

function App() {
  const { news } = useLoaderData();

  return (
    <Wrapper>
      <Suspense fallback={<Loading fullscreen />}>
        <Await
          resolve={news}
          errorElement={<ErrorPage message={ERROR_MESSAGES.NO_NEWS} />}
        >
          {(newsData) => (
            <NewsList news={newsData} />)}
        </Await>
      </Suspense>
    </Wrapper>
  );
}

export default App;
