export interface IUser {
  id: number;
  name: string;
}

export const enum UsersActions {
  ADD = 'users/addUser',
  DELETE = 'users/deleteUser',
  SORTED = 'users/sortByName',
}

export type TypeUsers =
  | { type: UsersActions.ADD; payload: IUser }
  | { type: UsersActions.DELETE; payload: number }
  | { type: UsersActions.SORTED; payload: string };
