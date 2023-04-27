import React, { Suspense } from 'react';
import { useLoaderData, Await, useRevalidator } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useCookies } from 'react-cookie';
import NewsBody from '../../components/NewsBody';
import Loading from '../../components/Loading';
import ErrorPage from '../ErrorPage';

import { ERROR_MESSAGES } from '../../lang/pt-br/errors';
import { createComment, deleteComment, updateComment } from '../../providers/news/site';

function NewsPage() {
  const { newsItem } = useLoaderData();
  const revalidator = useRevalidator();

  const [cookie] = useCookies(['token']);

  const onComment = async ({ commentary, id }) => {
    // TODO: remove arbitrary userId
    const comment = await createComment({
      comment: commentary,
      userId: cookie?.token?.id,
      newId: id,
    });

    if (comment) {
      toast('Comentário criado com sucesso!', {
        type: 'success',
        autoClose: 3000,
      });

      revalidator.revalidate();
    }
  };

  const onEditComment = async ({ commentary, commentaryId, newsId }) => {
    // TODO: remove arbitrary userId
    const comment = await updateComment({
      commentaryId,
      comment: commentary,
      userId: cookie?.token?.id,
      newId: newsId,
    });

    if (comment) {
      toast('Comentário editado com sucesso!', {
        type: 'success',
        autoClose: 3000,
      });

      revalidator.revalidate();
    }
  };

  const onDeleteComment = async (commentId) => {
    const comment = await deleteComment(commentId);

    if (comment) {
      toast('Comentário removido com sucesso!', {
        type: 'success',
        autoClose: 3000,
      });

      revalidator.revalidate();
    }
  };

  const onLike = (like) => {
    // eslint-disable-next-line no-console
    console.log(like);
  };

  const onDislike = (dislike) => {
    // eslint-disable-next-line no-console
    console.log(dislike);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Await
        resolve={newsItem}
        errorElement={<ErrorPage message={ERROR_MESSAGES.NO_NEWS} />}
        children={(news) => (
          <NewsBody
            data={news}
            onComment={onComment}
            onLike={onLike}
            onDislike={onDislike}
            onDeleteComment={onDeleteComment}
            onEditComment={onEditComment}
          />
        )}
      />
    </Suspense>
  );
}

export default NewsPage;
