import { combineReducers } from 'redux';
import getNotesReducer from './getNotes';

const notesReducer = combineReducers({
    getNotesReducer,
});

export default notesReducer;