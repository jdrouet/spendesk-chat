import * as types from '../constants/room';

var initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE:
      if (Array.isArray(action.payload)) {
        return [
          ...state,
          ...action.payload
        ];
      } else {
        return [
          ...state,
          action.payload
        ];
      }
    default:
      return state;
  }
}
