import React from 'react';
import { useParams } from 'react-router-dom';
import Wrapper from '../../components/layout/Wrapper';
import Text from '../../components/Typography/Text';
import Table from '../../components/Table';

import { LANG } from '../../lang/pt-br';

function AuthorList() {
  const { authorName } = useParams();

  return (
    <Wrapper>
      <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
        <Text size="text-2xl">
          {LANG.BY_AUTHOR.TITLE}
          :
        </Text>
        <Text size="text-2xl" className="font-semibold pr-8">
          {authorName}
        </Text>
      </div>
      <Table>
        <thead className="bg-gray-300">
          <tr className="h-12 border border-gray-100 rounded">
            <th className="text-left pl-5">
              Notícia
            </th>
          </tr>
        </thead>
      </Table>
    </Wrapper>
  );
}

export default AuthorList;
