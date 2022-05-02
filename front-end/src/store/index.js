import { configureStore, combineReducers } from '@reduxjs/toolkit';

// reducers
import authentication from '../slices/authSlice';

const rootReducer = combineReducers({ authentication });

export default function configureAppStore() {
  // const reduxSagaMonitorOptions = {};
  // const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  // const { run: runSaga } = sagaMiddleware;
  // const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  // runSaga(rootSaga);

  return store;
}
