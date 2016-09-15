import * as types from '../constants/message';
import _ from 'lodash'

var initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE:
      if (Array.isArray(action.payload)) {
        return _.uniqBy([
          ...state,
          ...action.payload
        ], 'id');
      } else {
        return _.uniqBy([
          ...state,
          action.payload
        ], 'id');
      }
    default:
      return state;
  }
}
