import { FC } from 'react';
import './App.css';
import { UsersList } from './components/UsersList/UsersList';
import styles from './common/styles/app.module.scss';

export const App: FC = () => {
  return (
    <>
      <h1 className={styles.main__title}>USERS LIST</h1>
      <UsersList />
    </>
  );
};
