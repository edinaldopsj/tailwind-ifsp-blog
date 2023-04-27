import React from 'react';
import PropTypes from 'prop-types';

import ColorButton from '../../../components/Button/Color';
import Wrapper from '../../../components/layout/Wrapper';
import Table from '../../../components/Table';
import Text from '../../../components/Typography/Text';

import { LANG } from '../../../lang/pt-br';

function UsersList({ usersList }) {
  const newUsers = () => {
    // TODO : add new news
    // eslint-disable-next-line no-console
    console.log('new');
  };

  const updateUsers = (id) => {
    // TODO: add update news
    // eslint-disable-next-line no-console
    console.log('update', id);
  };

  const deleteUsers = (id) => {
    // TODO: add delete news
    // eslint-disable-next-line no-console
    console.log('delete', id);
  };

  return (
    <Wrapper>
      <div className="flex justify-between mt-8 pt-4 px-4 md:px-16 md:text-center">
        <Text size="text-2xl">{LANG.USERS_LIST.TITLE}</Text>
        <ColorButton onClick={() => newUsers()}>
          <Text>{LANG.USERS_LIST.ACTIONS.NEW}</Text>
        </ColorButton>
      </div>
      <Table title={LANG.USERS_LIST.TITLE}>
        <thead className="bg-gray-300">
          <tr className="h-16 border border-gray-100 rounded">
            <th className="text-left pl-5">
              <Text size="text-lg">#</Text>
            </th>
            <th className="text-left">
              <Text size="text-lg">
                {LANG.USERS_LIST.USERS_TABLE.USERS_NAME}
              </Text>
            </th>
            <th className="text-left">
              <Text size="text-lg">
                {LANG.USERS_LIST.USERS_TABLE.USERS_NICK}
              </Text>
            </th>
            <th className="text-left">
              <Text size="text-lg">
                {LANG.USERS_LIST.USERS_TABLE.USERS_ROLE}
              </Text>
            </th>
            <th className="text-center w-32 md:w-72">
              <Text size="text-lg">
                {LANG.USERS_LIST.USERS_TABLE.USERS_ACTIONS}
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersList?.length
            ? usersList.map((users) => (
              <tr
                key={users?.id}
                className="h-16 border border-gray-100 rounded"
              >
                <td className="pl-5">
                  <Text>{users?.id}</Text>
                </td>
                <td>
                  <Text>{users?.name}</Text>
                </td>
                <td>
                  <Text>{users?.nickname}</Text>
                </td>
                <td>
                  <Text>LEITOR</Text>
                </td>
                <td className="text-center w-32 md:w-72">
                  <div className="flex flex-col md:flex-row gap-2">
                    <ColorButton
                      color="blue"
                      onClick={() => updateUsers(users?.id)}
                    >
                      <Text>{LANG.USERS_LIST.ACTIONS.EDIT}</Text>
                    </ColorButton>
                    <ColorButton
                      color="red"
                      onClick={() => deleteUsers(users?.id)}
                    >
                      <Text>{LANG.USERS_LIST.ACTIONS.DELETE}</Text>
                    </ColorButton>
                  </div>
                </td>
              </tr>
            ))
            : null}
        </tbody>
      </Table>
    </Wrapper>
  );
}

UsersList.defaultProps = {
  usersList: [],
};

UsersList.propTypes = {
  usersList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    updatedAt: PropTypes.string,
    name: PropTypes.string,
  })),

};

export default UsersList;
