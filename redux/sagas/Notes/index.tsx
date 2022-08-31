import { all } from 'redux-saga/effects';
import deleteNoteSaga from './deleteNote';
import getNotesSaga from './getNotes';

export default function* notesSaga(): Generator {
  yield all([
    getNotesSaga(),
    deleteNoteSaga()
  ]);
}