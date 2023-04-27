import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ColorButton from '../../components/Button/Color';
import Dialog from '../../components/Modals/Dialog';
import Table from '../../components/Table';
import Text from '../../components/Typography/Text';
import Wrapper from '../../components/layout/Wrapper';

import { LANG } from '../../lang/pt-br';
import { useToggle } from '../../hooks/useToggle';
import { ROUTE_NAMES } from '../../router/names';

/**
 * Page responsible for listing the news for admin or author
 * @param {object} props The react props object
 * @param {object[]} props.userNews The array of news list for the admin or the author
 * @param {string} props.userNews.id The news id
 * @param {string} props.userNews.updatedAt The news updatedAt
 * @param {string} props.userNews.title The news title
 * @param {boolean} props.userNews.published If the news is published
 * @returns News list for the admin or the author
 */
function List({ userNews, onPublish, onDelete }) {
  const [operationId, setOperationId] = useState(null);
  const [isPublishModalOpen, setIsPublishModalOpen] = useToggle(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useToggle(false);

  const handlePublishModal = (id) => {
    setIsPublishModalOpen(true);
    setOperationId(id);
  };

  const handleClosePublishModal = () => {
    setIsPublishModalOpen(false);
    setOperationId(null);
  };

  const publishNews = (id) => {
    onPublish(id);
    setIsPublishModalOpen(false);
  };

  const handleDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    setOperationId(id);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setOperationId(null);
  };

  const deleteNews = (id) => {
    onDelete(id);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Wrapper>
        <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
          <Text size="text-2xl">{LANG.REGISTER_NEWS.TITLE}</Text>
          <Link to={ROUTE_NAMES.AUTHOR_CREATE_NEWS}>
            <ColorButton>
              <Text>{LANG.REGISTER_NEWS.ACTIONS.NEW}</Text>
            </ColorButton>
          </Link>
        </div>
        <Table title={LANG.REGISTER_NEWS.TITLE}>
          <thead className="bg-gray-300">
            <tr className="h-16 border border-gray-100 rounded">
              <th className="text-left pl-5">
                <Text size="text-lg">
                  {LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_TITLE}
                </Text>
              </th>
              <th className="text-left w-32 md:w-52">
                <Text size="text-lg">
                  {LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_DATE}
                </Text>
              </th>
              <th className="text-center w-32 md:w-72">
                <Text size="text-lg">
                  {LANG.REGISTER_NEWS.NEWS_TABLE.NEWS_ACTIONS}
                </Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {userNews?.length
              ? userNews.map((news) => (
                <tr
                  key={news?.id}
                  className="h-16 border border-gray-100 rounded"
                >
                  <td className="pl-5">
                    <Text>{news?.title}</Text>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <Text>
                        {new Date(news?.updatedAt).toLocaleString('pt-BR')}
                      </Text>
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col md:flex-row gap-2">
                      <Link to={`${ROUTE_NAMES.AUTHOR_EDIT}/${news?.id}`}>
                        <ColorButton color="blue">
                          <Text>{LANG.REGISTER_NEWS.ACTIONS.EDIT}</Text>
                        </ColorButton>
                      </Link>

                      {!news?.published ? (
                        <ColorButton
                          color="green"
                          onClick={() => handlePublishModal(news?.id)}
                        >
                          <Text>{LANG.REGISTER_NEWS.ACTIONS.PUBLISH}</Text>
                        </ColorButton>
                      ) : null}

                      <ColorButton
                        color="red"
                        onClick={() => handleDeleteModal(news?.id)}
                      >
                        <Text>{LANG.REGISTER_NEWS.ACTIONS.DELETE}</Text>
                      </ColorButton>
                    </div>
                  </td>
                </tr>
              ))
              : null}
          </tbody>
        </Table>
      </Wrapper>

      {/* Dialogs */}
      {isPublishModalOpen && (
        <Dialog
          title={LANG.PUBLISH_MODAL.TITLE}
          message={LANG.PUBLISH_MODAL.MESSAGE}
          confirmText={LANG.PUBLISH_MODAL.CONFIRM_BUTTON}
          onConfirm={() => publishNews(operationId)}
          onCancel={handleClosePublishModal}
        />
      )}

      {isDeleteModalOpen && (
        <Dialog
          title={LANG.DELETE_MODAL.TITLE}
          message={LANG.DELETE_MODAL.MESSAGE}
          confirmText={LANG.DELETE_MODAL.CONFIRM_BUTTON}
          onConfirm={() => deleteNews(operationId)}
          onCancel={handleCloseDeleteModal}
        />
      )}
    </>
  );
}

List.defaultProps = {
  userNews: [],
  onPublish: () => {},
  onDelete: () => {},
};

List.propTypes = {
  userNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      updatedAt: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
  onPublish: PropTypes.func,
  onDelete: PropTypes.func,
};

export default List;
