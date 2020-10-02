import * as ACTION from '../constants';

  export function requestApiData() {
    return {
      type: ACTION.REQUEST_API_DATA
    };
  }
  
  export function receiveApiData(payload) {
    return {
      type: ACTION.RECEIVE_API_DATA,
      payload,
    };
  }