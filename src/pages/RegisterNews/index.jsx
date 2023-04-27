import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import List from './List';
import ErrorPage from '../ErrorPage';
import { ERROR_MESSAGES } from '../../lang/pt-br/errors';
import Loading from '../../components/Loading';

function RegisterNews() {
  const { news } = useLoaderData();

  return (
    <Suspense fallback={<Loading fullscreen />}>
      <Await
        resolve={news}
        errorElement={<ErrorPage message={ERROR_MESSAGES.NO_NEWS} />}
      >
        {(newsData) => <List userNews={newsData} />}
      </Await>
    </Suspense>
  );
}

export default RegisterNews;
