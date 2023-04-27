import React, { Suspense } from 'react';
import { toast } from 'react-toastify';
import {
  useNavigate, useParams, Await, useLoaderData,
} from 'react-router-dom';

import { useCookies } from 'react-cookie';
import Loading from '../../components/Loading';
import CreateNew from './create';
import ErrorPage from '../ErrorPage';

import { createUserNews, updateUserNews } from '../../providers/news/user';
import { ERROR_MESSAGES } from '../../lang/pt-br/errors';

function CreateNewsPage() {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const { news = undefined } = useLoaderData();
  const [cookie] = useCookies(['token']);

  const onSubmit = async (data) => {
    if (!data?.id) {
      const newNews = await createUserNews({
        userNews: {
          title: data?.title,
          subtitle: data?.subtitle,
          content: data?.text,
        },
        userId: cookie?.token?.id,
      });

      if (newNews) {
        toast('Notícia criada com sucesso!', {
          type: 'success',
          autoClose: 3000,
        });
      }
    } else {
      const updatedNews = await updateUserNews({
        userNews: {
          title: data?.title,
          subtitle: data?.subtitle,
          content: data?.text,
        },
        userId: cookie?.token?.id,
        newsId: data?.id,
      });

      if (updatedNews) {
        toast('Notícia atualizada com sucesso!', {
          type: 'success',
          autoClose: 3000,
        });
      }
    }

    navigate(`/author/${cookie?.token?.id}/news/list`);
  };

  return (newsId && news) ? (
    <Suspense fallback={<Loading fullscreen />}>
      <Await
        resolve={news}
        errorElement={<ErrorPage message={ERROR_MESSAGES.NO_NEWS} />}
      >
        {(newsData) => <CreateNew onSubmit={onSubmit} news={newsData} />}
      </Await>
    </Suspense>
  ) : (
    <CreateNew onSubmit={onSubmit} />
  );
}

export default CreateNewsPage;
