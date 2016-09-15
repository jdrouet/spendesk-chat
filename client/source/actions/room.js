import {request} from './networking';
import * as cst from '../constants/room';

export function find(filter) {
  return (dispatch) => {
    return dispatch(request(`api/Rooms?filter=${JSON.stringify(filter)}`))
      .then(res => dispatch({type: cst.CREATE, payload: res.data}));
  }
}

export function onCreate(room) {
  return {type: cst.CREATE, payload: room};
}

export function create(room) {
  return request('api/Rooms', {
    method: 'POST',
    body: JSON.stringify(room)
  })
}
