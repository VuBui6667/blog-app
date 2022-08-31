import { INote } from "../../../pages/posts/[id]";
import * as type from "../../types"


export const deleteNote = (id : string) => ({
    type: type.DELETE_NOTE,
    payload: id,
})

export const deleteNotesFailure = (error: any) => ({
    type: type.DELETE_NOTE_FAILURE,
    payload: error
})