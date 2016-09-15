import {request} from './networking';
import * as cst from '../constants/message';

export function find(filter) {
  return (dispatch) => {
    return dispatch(request(`api/Messages?filter=${JSON.stringify(filter)}`))
      .then(res => dispatch({type: cst.CREATE, payload: res.data}));
  }
}

export function onCreate(message) {
  return {type: cst.CREATE, payload: message};
}

export function create(message) {
  return request('api/Messages', {
    method: 'POST',
    body: JSON.stringify(message)
  })
}
