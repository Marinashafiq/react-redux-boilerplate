import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { watchAll } from './sagas';
// ======== Compose redux dev tool with applyMiddleware ========
const saga = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(saga),
);
const store = createStore(reducers, enhancer);

saga.run(watchAll);

export default store;