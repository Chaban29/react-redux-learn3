import {
  IScore,
  ScoreActions,
  TypeScoreActions,
} from '../../../types/bank-score';

const initialState: IScore = { cash: 0 };

export const bankScoreReducer = (
  state = initialState,
  action: TypeScoreActions
) => {
  switch (action.type) {
    case ScoreActions.ADD:
      return {
        ...state,
        cash: state.cash + action.payload,
      };
    case ScoreActions.GET:
      return {
        ...state,
        cash: state.cash - action.payload,
      };
    default:
      return state;
  }
};

export const addCashAction = (payload: number) => ({
  type: ScoreActions.ADD,
  payload,
});
export const getCashAction = (payload: number) => ({
  type: ScoreActions.GET,
  payload,
});
