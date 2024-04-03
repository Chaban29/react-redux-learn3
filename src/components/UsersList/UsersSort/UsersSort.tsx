import { Button } from '@mui/material';
import { FC } from 'react';

interface IUserSort {
  sortedUsersByName: () => void;
}

export const UsersSort: FC<IUserSort> = ({ sortedUsersByName }: IUserSort) => {
  return (
    <Button variant='outlined' onClick={sortedUsersByName}>
      Sort by name
    </Button>
  );
};
