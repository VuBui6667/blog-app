import { all } from 'redux-saga/effects';
import notesSaga from './Notes/index';

export default function* rootSaga(): Generator {
  yield all([
    notesSaga()
  ]);
}