import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TypeRootState } from '../../store/Reducers/rootReducers/rootReducers';
import {
  addCashAction,
  getCashAction,
} from '../../store/Reducers/counterReducer/bankScoreReducer';

interface IScoreTitle {
  title: string;
}

export const BankScore: FC<IScoreTitle> = ({ title }: IScoreTitle) => {
  const dispatch = useDispatch();
  const cash = useSelector((state: TypeRootState) => state.cash.cash);

  const handleAddCash = () => {
    dispatch(addCashAction(100));
  };

  const handleGetCash = () => {
    if (!cash) return;
    dispatch(getCashAction(50));
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{cash}</h2>
      <button type='button' onClick={handleAddCash}>
        Added cash
      </button>
      <button type='button' onClick={handleGetCash}>
        Get cash
      </button>
    </div>
  );
};
