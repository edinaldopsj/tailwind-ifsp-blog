import React, { Suspense } from 'react';
import { useLoaderData, Await, useRevalidator } from 'react-router-dom';
import { toast } from 'react-toastify';

import List from './List';
import ErrorPage from '../ErrorPage';

import Loading from '../../components/Loading';
import { deleteUserNews, publishUserNews } from '../../providers/news/user';

import { LANG } from '../../lang/pt-br';
import { ERROR_MESSAGES } from '../../lang/pt-br/errors';

function RegisterNews() {
  const { news } = useLoaderData();
  const revalidator = useRevalidator();

  const onPublish = async (id) => {
    const isPublished = await publishUserNews(id);

    if (isPublished) {
      toast(LANG.REGISTER_NEWS.PUBLISH_SUCCESS, {
        type: 'success',
        autoClose: 3000,
      });

      revalidator.revalidate();
    }
  };

  const onDelete = async (id) => {
    const isDeleted = await deleteUserNews(id);

    if (isDeleted) {
      toast(LANG.REGISTER_NEWS.DELETE_SUCCESS, {
        type: 'success',
        autoClose: 3000,
      });

      revalidator.revalidate();
    }
  };

  return (
    <Suspense fallback={<Loading fullscreen />}>
      <Await
        resolve={news}
        errorElement={<ErrorPage message={ERROR_MESSAGES.NO_NEWS} />}
      >
        {(newsData) => {
          const filteredNews = newsData.filter(
            // TODO: remove hardcoded date filter
            (item) => item?.deletedAt === '2222-12-22T00:00:00.000Z',
          );

          return (
            <List
              userNews={filteredNews}
              onPublish={onPublish}
              onDelete={onDelete}
            />
          );
        }}
      </Await>
    </Suspense>
  );
}

export default RegisterNews;
