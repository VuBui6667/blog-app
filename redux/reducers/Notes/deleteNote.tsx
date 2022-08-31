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
    payload: number | string
}

const deleteNoteReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case type.DELETE_NOTE: {
            const newState = state.notes
            console.log(action);
            return {
                ...state,
                notes: newState.filter(note => note.id !== action.payload)
            }
        }   
        case type.DELETE_NOTE_FAILURE: {
            return {
                ...state, 
                pending: false,
                notes: [],
                error: action.payload
            }
        }
        default:
            return state;
    }
};

export default deleteNoteReducer;