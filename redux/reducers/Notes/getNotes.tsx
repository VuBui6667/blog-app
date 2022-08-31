import { INote } from "../../../pages/posts/[id]";
import * as type from '../../types'

interface NotesState {
    pending: boolean;
    notes: INote[];
    error: string | null;
}


const initialState : NotesState = {
    pending: false,
    notes: [],
    error: null,
}

interface IAction {
    type: String,
    payload: INote
}

const getNotesReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case type.FETCH_NOTES_REQUEST: {
            return {
                ...state,
            }
        }   
        case type.FETCH_NOTES_SUCCESS: {
            return {
                ...state,
                notes: action.payload.notes,
                pending: false,
                error: null
            }
        }   
        case type.FETCH_NOTES_FAILURE: {
            return {
                ...state, 
                pending: false,
                notes: [],
                error: action.payload.error
            }
        }
        default:
            return state;
    }
};

export default getNotesReducer;