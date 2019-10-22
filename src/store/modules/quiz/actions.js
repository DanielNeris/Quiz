export function answerRequest(answer) {
  return {
    type: '@quiz/ANSWER_REQUEST',
    payload: { answer },
  };
}

export function answerSuccess() {
  return {
    type: '@quiz/ANSWER_SUCCESS',
  };
}

export function answerFailure() {
  return {
    type: '@quiz/ANSWER_FAILURE',
  };
}
