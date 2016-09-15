import {merge} from 'lodash';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';

import * as types from '../constants/networking';

export function start() {
  return {type: types.START};
}

export function stop() {
  return {type: types.STOP};
}

export function request(url, options) {
  return (dispatch) => {
    dispatch(start());
    var requestOptions = merge({}, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }, options);
    for (var key in requestOptions.headers) {
      if (requestOptions.headers[key] == null) {
        delete requestOptions.headers[key];
      }
    }
    var status;
    return Promise.resolve(fetch(url, requestOptions))
    .then((response) => {
      status = response.status;
      return status === 204 ? null : response.json();
    })
    .then((response) => {
      var result = {
        status,
        data: response
      };
      if (status >= 200 && status < 300) {
        return result;
      } else {
        let err = new Error(response.error ? response.error.name : JSON.stringify(response));
        err.data = response;
        throw err;
      }
    })
    .finally(() => dispatch(stop()));
  };
};
