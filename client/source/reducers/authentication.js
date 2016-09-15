import * as cst from '../constants/authentication';

const initialState = {
  token: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case cst.LOGIN:
      return {token: action.token};
    case cst.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
