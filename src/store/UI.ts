/**
 * UIの表示状態
 */

export type UIActions = SetBusyAction;

const initialState: UIState = Object.freeze({
  isBusy: false,
});

export function UIReducer(state = initialState, action: UIActions): UIState {
  return state;
}

type SetBusyAction = {
  type: 'SET_BUSY_ACTION';
};
