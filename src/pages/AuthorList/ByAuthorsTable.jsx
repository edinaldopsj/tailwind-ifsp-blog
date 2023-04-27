import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Text from '../../components/Typography/Text';

function ByAuthorsTable({ authors }) {
  return (
    <Table>
      <thead className="bg-gray-300">
        <tr className="h-12 border border-gray-100 rounded">
          <th className="text-left pl-5">
            Autor
          </th>
          <th className="text-left pl-5">
            Apelido
          </th>
          <th className="text-rigth pr-2 w-32">
            Quantidade
          </th>
        </tr>
      </thead>
      <tbody>
        {authors?.length ? authors.map((author) => (
          <tr key={author?.id} className="h-12 border border-gray-100 rounded">
            <td className="pl-5">
              <Text>{author?.name}</Text>
            </td>
            <td className="pl-5">
              <Link to={`/news/by/${author?.nickname}`}>
                <Text>{author?.nickname}</Text>
              </Link>
            </td>
            <td className="text-rigth pr-2 w-32">
              <Text>{author?.quant ?? 0}</Text>
            </td>
          </tr>
        )) : null}
      </tbody>
    </Table>
  );
}

ByAuthorsTable.defaultProps = {
  authors: [],
};

ByAuthorsTable.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    quant: PropTypes.string,
  })),
};

export default ByAuthorsTable;
