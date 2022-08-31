import { INote } from "../../../pages/posts/[id]";
import { FETCH_NOTES_FAILURE, FETCH_NOTES_REQUEST, FETCH_NOTES_SUCCESS } from "../../types"


interface FetchNotesSuccessPayload {
    notes: INote;
}

export const fetchNotesRequest = () => ({
    type: FETCH_NOTES_REQUEST
})

export const fetchNotesSuccess = (data : FetchNotesSuccessPayload) => ({
    type: FETCH_NOTES_SUCCESS,
    payload: data
})

export const fetchNotesFailure = (error: any) => ({
    type: FETCH_NOTES_FAILURE,
    payload: error
})