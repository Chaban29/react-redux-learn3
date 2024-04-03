export interface IScore {
  cash: number;
}

export const enum ScoreActions {
  ADD = 'cash/add',
  GET = 'cash/get',
}

export type TypeScoreActions =
  | { type: ScoreActions.ADD; payload: number }
  | { type: ScoreActions.GET; payload: number };
