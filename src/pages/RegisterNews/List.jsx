import React from 'react';
import PropTypes from 'prop-types';

import Table from '../../components/Table';
import Text from '../../components/Typography/Text';
import ColorButton from '../../components/Button/Color';
import Wrapper from '../../components/layout/Wrapper';

import { LANG } from '../../lang/pt-br';

/**
 * Page responsible for listing the news for admin or author
 * @param {object} props The react props object
 * @param {object[]} props.userNews The array of news list for the admin or the author
 * @param {string} props.userNews.id The news id
 * @param {string} props.userNews.updatedAt The news updatedAt
 * @param {string} props.userNews.title The news title
 * @returns News list for the admin or the author
 */
function List({ userNews }) {
  const newNews = () => {
    // TODO : add new news
    // eslint-disable-next-line no-console
    console.log('new');
  };

  const updateNews = (id) => {
    // TODO: add update news
    // eslint-disable-next-line no-console
    console.log('update', id);
  };

  const publishNews = (id) => {
    // TODO: add publish news
    // eslint-disable-next-line no-console
    console.log('publish', id);
  };

  const deleteNews = (id) => {
    // TODO: add delete news
    // eslint-disable-next-line no-console
    console.log('delete', id);
  };

  return (
    <Wrapper>
      <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
        <Text size="text-2xl">{LANG.REGISTER_NEWS.TITLE}</Text>
        <ColorButton onClick={() => newNews()}>
          <Text>{LANG.REGISTER_NEWS.ACTIONS.NEW}</Text>
        </ColorButton>
      </div>
      <Table title={LANG.REGISTER_NEWS.TITLE}>
        <thead className="bg-gray-300">
          <tr className="h-16 border border-gray-100 rounded">
            <th className="text-left pl-5">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_TITLE}</Text>
            </th>
            <th className="text-left w-32 md:w-52">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_DATE}</Text>
            </th>
            <th className="text-center w-32 md:w-72">
              <Text size="text-lg">{LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_ACTIONS}</Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            userNews?.length ? userNews.map((news) => (
              <tr key={news?.id} className="h-16 border border-gray-100 rounded">
                <td className="pl-5">
                  <Text>{news?.title}</Text>
                </td>
                <td>
                  <div className="flex items-center">
                    <Text>{new Date(news?.updatedAt).toLocaleString('pt-BR')}</Text>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col md:flex-row gap-2">
                    <ColorButton color="blue" onClick={() => updateNews(news?.id)}>
                      <Text>{LANG.REGISTER_NEWS.ACTIONS.EDIT}</Text>
                    </ColorButton>
                    <ColorButton color="green" onClick={() => publishNews(news?.id)}>
                      <Text>{LANG.REGISTER_NEWS.ACTIONS.PUBLISH}</Text>
                    </ColorButton>
                    <ColorButton color="red" onClick={() => deleteNews(news?.id)}>
                      <Text>{LANG.REGISTER_NEWS.ACTIONS.DELETE}</Text>
                    </ColorButton>
                  </div>
                </td>
              </tr>
            )) : null
          }
        </tbody>
      </Table>
    </Wrapper>
  );
}

List.defaultProps = {
  userNews: [],
};

List.propTypes = {
  userNews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    updatedAt: PropTypes.string,
    title: PropTypes.string,
  })),

};

export default List;
