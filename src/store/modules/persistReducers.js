import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'quiz',
      storage,
      whitelist: ['quiz'],
    },
    reducers
  );

  return persistedReducer;
};
