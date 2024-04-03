import { IUser, TypeUsers, UsersActions } from '../../../types/users';

const usersState: IUser[] = [{ id: 0, name: 'Roman' }] as IUser[];

export const usersReducer = (state = usersState, action: TypeUsers) => {
  switch (action.type) {
    case UsersActions.ADD:
      return [...state, action.payload];
    case UsersActions.DELETE:
      return state.filter((user) => user.id !== action.payload);
    case UsersActions.SORTED:
      return action.payload;
    default:
      return state;
  }
};

export const addUserAction = (payload: IUser) => ({
  type: UsersActions.ADD,
  payload,
});

export const deleteUserAction = (payload: number) => ({
  type: UsersActions.DELETE,
  payload,
});

export const sortedUsersAction = (payload: IUser[]) => ({
  type: UsersActions.SORTED,
  payload,
});
