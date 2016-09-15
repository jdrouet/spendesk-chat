import * as types from '../constants/authentication';

export function login(token) {
  return {type: types.LOGIN, token};
};

export function logout() {
  return {type: types.LOGOUT};
};
