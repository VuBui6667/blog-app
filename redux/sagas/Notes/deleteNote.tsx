import { AxiosRequestConfig } from "axios"
import { TakeableChannel } from "redux-saga"
import { all, call, put, takeEvery} from "redux-saga/effects"
import { INote } from "../../../pages/posts/[id]"
import { deleteNotesFailure, deleteNote } from "../../actions/notes/deleteNotes"
import { DELETE_NOTE, FETCH_NOTES_REQUEST} from "../../types"
import NotesAPI from "../api/NotesAPI"

// const getAllNotes = (params) => {
//     return NotesAPI.delete(params)
// }

function* deleteData({payload:id}: any) {
    try {
        const res : INote = yield call(NotesAPI.delete, id)
        yield put({type: FETCH_NOTES_REQUEST})
    }
    catch (e) {
        yield put(
            deleteNotesFailure({
                error: e
            })
        )
    }
}

function* deleteNoteSaga() {
    yield all([takeEvery(DELETE_NOTE  as unknown as TakeableChannel<unknown>, deleteData)]);
}

export default deleteNoteSaga