import * as types from '../constants/authentication';

export function login(credentials) {
  return {type: types.LOGIN, credentials};
};

export function logout() {
  return {type: types.LOGOUT};
};
