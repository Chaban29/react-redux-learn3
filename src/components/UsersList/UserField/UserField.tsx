import { FC, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../../../common/styles/app.module.scss';

interface IUserField {
  onAddNewUser: (userName: string) => void;
}

export const UserField: FC<IUserField> = ({ onAddNewUser }: IUserField) => {
  const [currentUserName, setCurrentUserName] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleAddUser = () => {
    onAddNewUser(currentUserName);
    setIsDisabled(!isDisabled);
    setCurrentUserName('');
  };

  const isDisabledButton = !currentUserName ? true : false;

  return (
    <Box className={styles.box}>
      <TextField
        id='outlined-multiline-flexible'
        label='Add user'
        multiline
        maxRows={4}
        type='text'
        value={currentUserName}
        onChange={(event) => setCurrentUserName(event.target.value)}
      />
      <Button
        disabled={isDisabledButton}
        variant='outlined'
        type='button'
        onClick={handleAddUser}
      >
        Add new user
      </Button>
    </Box>
  );
};
