import { AnyAction } from 'redux';

export type UIActions = AnyAction;

const initialState: UIState = Object.freeze({
  isBusy: false,
});

export function UIReducer(state = initialState, action: UIActions): UIState {
  return state;
}
