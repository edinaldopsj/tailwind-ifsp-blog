import React, { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import UsersList from '.';
import ErrorPage from '../../ErrorPage';
import Loading from '../../../components/Loading';
import { ERROR_MESSAGES } from '../../../lang/pt-br/errors';

function UserListPage() {
  const { users } = useLoaderData();

  return (
    <Suspense fallback={<Loading fullscreen />}>
      <Await
        resolve={users}
        errorElement={<ErrorPage message={ERROR_MESSAGES.NO_USERS} />}
      >
        {(usersData) => <UsersList usersList={usersData} />}
      </Await>
    </Suspense>
  );
}

export default UserListPage;
