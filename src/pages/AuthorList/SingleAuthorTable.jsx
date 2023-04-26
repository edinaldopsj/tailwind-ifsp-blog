import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import Text from '../../components/Typography/Text';

function SingleAuthorTable({ news }) {
  return (
    <Table>
      <thead className="bg-gray-300">
        <tr className="h-12 border border-gray-100 rounded">
          <th className="text-left pl-5">
            Notícia
          </th>
          <th className="text-rigth pr-2 w-32">
            Link
          </th>
        </tr>
      </thead>
      <tbody>
        {news?.length ? news.map((newsItem) => (
          <tr key={newsItem?.id} className="h-12 border border-gray-100 rounded">
            <td className="pl-5">
              <Text>{newsItem?.title}</Text>
            </td>
            <td className="text-rigth pr-2 w-32">
              <Link to={`news/${newsItem?.id}`}>
                <Text>Visualizar</Text>
              </Link>
            </td>
          </tr>
        )) : null}
      </tbody>
    </Table>
  );
}

SingleAuthorTable.defaultProps = {
  news: [],
};

SingleAuthorTable.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })),
};

export default SingleAuthorTable;
