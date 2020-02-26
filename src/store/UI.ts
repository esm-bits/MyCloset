/**
 * UIの表示状態
 */

const initialState: UIState = Object.freeze({
  isBusy: false,
});

export function UIReducer(state = initialState, action: UIActions): UIState {
  switch (action.type) {
    case 'SET_BUSY': {
      return { ...state, isBusy: true };
    }
    case 'UNSET_BUSY': {
      return { ...state, isBusy: false };
    }
    default: {
      return state;
    }
  }
}

export type UIActions = SetBusyAction | UnsetBusyAction;

type SetBusyAction = {
  type: 'SET_BUSY';
};

type UnsetBusyAction = {
  type: 'UNSET_BUSY';
};
