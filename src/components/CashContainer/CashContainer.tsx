import { FC, useCallback, useState } from 'react';

export const CashContainer: FC = () => {
  const [cash, setCash] = useState<number>(0);

  const handleAddCash = useCallback(() => {
    setCash((prevCash) => prevCash + 100);
  }, []);

  const handleGetCash = () => {
    if (!cash) return;
    setCash((prevCash) => prevCash - 50);
  };
  return (
    <>
      <h2>{cash}</h2>
      <button type='button' onClick={handleAddCash}>
        Added cash
      </button>
      <button type='button' onClick={handleGetCash}>
        Get cash
      </button>
    </>
  );
};
