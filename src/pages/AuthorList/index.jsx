/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Wrapper from '../../components/layout/Wrapper';
import Text from '../../components/Typography/Text';

import { LANG } from '../../lang/pt-br';
import ByAuthorsTable from './ByAuthorsTable';
import SingleAuthorTable from './SingleAuthorTable';

function AuthorList() {
  const { authors, news } = useLoaderData();
  const { authorName } = useParams();

  return (
    <Wrapper>
      <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
        <Text size="text-2xl">
          {LANG.BY_AUTHOR.TITLE}
          :
        </Text>
        <Text size="text-2xl" className="font-semibold">
          {authorName ?? 'Todos'}
        </Text>
      </div>

      {!authorName && <ByAuthorsTable authors={authors} />}
      {authorName && <SingleAuthorTable news={news} />}
    </Wrapper>
  );
}

export default AuthorList;
