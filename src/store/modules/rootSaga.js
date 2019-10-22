import { all } from 'redux-saga/effects';

import quiz from './quiz/sagas';

export default function* rootSaga() {
  return yield all([quiz]);
}
