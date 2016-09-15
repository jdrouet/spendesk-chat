import * as types from '../constants/networking';

var initialState = {
  running: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.START:
      return {
        running: state.running + 1
      };
    case types.STOP:
      return {
        running: state.running - 1
      };
    default:
      return state;
  }
}
