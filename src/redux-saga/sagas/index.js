import { call, put, takeLatest } from "redux-saga/effects";

import { receiveApiData } from "../actions";
import { fetchMembers } from "../../utils/api/members";
import { REQUEST_API_DATA } from '../constants'
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData() {
  try {
    // do api call
    const data = yield call(fetchMembers);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}