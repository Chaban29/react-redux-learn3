import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeRootState } from '../../store/Reducers/rootReducers/rootReducers';
import {
  addUserAction,
  deleteUserAction,
  sortedUsersAction,
} from '../../store/Reducers/usersReducer/usersReducer';
import { UserField } from './UserField/UserField';
import { IUser } from '../../types/users';
import { UsersSort } from './UsersSort/UsersSort';
import { Button } from '@mui/material';
import styles from '../../common/styles/app.module.scss';

export const UsersList: FC = () => {
  const dispatch = useDispatch();
  const users = useSelector<TypeRootState, IUser[]>(
    (state: TypeRootState) => state.users
  );

  const handleDeleteUser = (userId: number) => {
    dispatch(deleteUserAction(userId));
  };

  const handleAddUser = (userName: string) => {
    const user = { id: Number(Date.now()), name: userName };
    dispatch(addUserAction(user));
  };

  const handleSortedUsersByName = () => {
    const sortedCustomers = [...users].sort((a, b) => {
      return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });
    dispatch(sortedUsersAction(sortedCustomers));
  };

  return (
    <div>
      <UserField onAddNewUser={handleAddUser} />
      <ul>
        {users.map((user: IUser) => (
          <li key={user.id}>
            <span className={styles.third__heading}>{user.name}</span>
            <Button
              className={styles.button__left}
              variant='outlined'
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete user
            </Button>
          </li>
        ))}
      </ul>
      {users.length > 1 ? (
        <UsersSort sortedUsersByName={handleSortedUsersByName} />
      ) : (
        ''
      )}
    </div>
  );
};
