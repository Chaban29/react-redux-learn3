import { FC } from 'react';

interface IUserSort {
  sortedUsersByName: () => void;
}

export const UsersSort: FC<IUserSort> = ({ sortedUsersByName }: IUserSort) => {
  return <button onClick={sortedUsersByName}>Sort by name</button>;
};
