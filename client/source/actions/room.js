import {request} from './networking';
import * as cst from '../constants/room';

export function find(filter) {
  return (dispatch) => {
    return dispatch(request(`api/Rooms?filter=${JSON.stringify(filter)}`))
      .then(res => dispatch({type: cst.CREATE, payload: res.data}));
  }
}

export function create(room) {
  return request('api/Rooms', {
    method: 'POST',
    body: JSON.stringify(room)
  })
}

export function listen() {
  return (dispatch) => {
    let source = new EventSource('api/Rooms/change-stream?_format=event-stream');
    source.addEventListener('data', function(data) {
      switch(data.type) {
        case 'create':
          return dispatch(() => ({type: cst.CREATE, payload: data.target}));
      }
    });
  };
}
