/* eslint-disable react/destructuring-assignment */
import React, { Suspense } from 'react';
import { useParams, useLoaderData, Await } from 'react-router-dom';
import Wrapper from '../../components/layout/Wrapper';
import Text from '../../components/Typography/Text';

import ByAuthorsTable from './ByAuthorsTable';
import SingleAuthorTable from './SingleAuthorTable';
import Loading from '../../components/Loading';
import ErrorPage from '../ErrorPage';

import { LANG } from '../../lang/pt-br';
import { ERROR_MESSAGES } from '../../lang/pt-br/errors';

function AuthorList() {
  const { authors, news } = useLoaderData();
  const { authorName } = useParams();

  return (
    <Wrapper>
      <div className="flex justify-center mt-8 pt-4 px-4 md:px-16 md:text-center">
        <div className="flex gap-2 items-baseline">
          <Text size="text-2xl">{LANG.BY_AUTHOR.TITLE}</Text>
          <Text size="text-xl">
            (clique no apelido do autor para ver as notícias dele.)
          </Text>
        </div>
      </div>

      <Text as="h1" size="text-2xl" className="text-center mt-10">{authorName ?? ''}</Text>

      {!authorName && (
        <Suspense fallback={<Loading />}>
          <Await
            resolve={authors}
            errorElement={<ErrorPage message={ERROR_MESSAGES.NO_AUTHOR} />}
            children={(authorData) => <ByAuthorsTable authors={authorData} />}
          />
        </Suspense>
      )}

      {authorName && (
        <Suspense fallback={<Loading />}>
          <Await
            resolve={news}
            errorElement={<ErrorPage message={ERROR_MESSAGES.NO_AUTHOR_NEWS} />}
            children={(newsData) => <SingleAuthorTable news={newsData} />}
          />
        </Suspense>
      )}
    </Wrapper>
  );
}

export default AuthorList;
