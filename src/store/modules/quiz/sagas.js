import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import api from '~/services/api';

import { answerSuccess, answerFailure } from './actions';

export function* sendAnswer({ payload }) {
  try {
    const { answer } = payload;

    // const response = yield call(api.post, 'sessions', {
    //   email,
    // });

    // const { token, user } = response.data;

    let testeResponse = false;

    if (answer === 'C') {
      testeResponse = true;
    }

    if (testeResponse) {
      yield put(answerSuccess());
      toast.success('Resposta Correta!');
      return;
    }

    yield put(answerFailure());
    toast.error('Resposta Errada!');
  } catch (error) {
    toast.error('Falha, entre em contato!');
    yield put(answerFailure());
  }
}

export default all([takeLatest('@quiz/ANSWER_REQUEST', sendAnswer)]);
