import {takeEvery, put} from 'redux-saga/effects';
import * as actionTypes from '../actionTypes';
import axios from 'axios';
import * as actions from '../actions';

export function* fetchHomeSaga(action) {
  try {
    const response = yield axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    //const response = yield call(()=> axios.get("https://api.covid19api.com/summary"));
    yield put(actions.fetchHomeSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchHomeFail(error));
  }
}

export function* watchHome() {
  yield takeEvery(actionTypes.FETCH_HOME, fetchHomeSaga);
}
