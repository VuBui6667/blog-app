import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const store =
    (applyMiddleware(sagaMiddleware))
(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
