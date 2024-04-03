import { FC, Fragment, useState } from 'react';

interface IUserField {
  onAddNewUser: (userName: string) => void;
}

export const UserField: FC<IUserField> = ({ onAddNewUser }: IUserField) => {
  const [currentUserName, setCurrentUserName] = useState<string>('');

  const handleAddUser = () => {
    onAddNewUser(currentUserName);
    setCurrentUserName('');
  };

  return (
    <Fragment>
      <input
        type='text'
        value={currentUserName}
        onChange={(event) => setCurrentUserName(event.target.value)}
      />
      <button type='button' onClick={handleAddUser}>
        Add new user
      </button>
    </Fragment>
  );
};
