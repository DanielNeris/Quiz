import produce from 'immer';

const INITIAL_STATE = {
  correctAnswer: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@quiz/ANSWER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@quiz/ANSWER_SUCCESS': {
        draft.correctAnswer = true;
        draft.loading = false;
        break;
      }
      case '@quiz/ANSWER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
