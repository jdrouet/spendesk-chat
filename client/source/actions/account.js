import {request} from './networking';
import * as cst from '../constants/account';
import * as authActions from './authentication';

export function create(account) {
  return request('api/Users', {
    method: 'POST',
    body: JSON.stringify(account)
  })
}

export function login(account) {
  return (dispatch) => {
    return dispatch(request('api/Users/login', {
      method: 'POST',
      body: JSON.stringify(account)
    })).then((res) => {
      if (res.status === 200) {
        dispatch(authActions.login(res.data));
      }
      return res;
    })
  }
}
