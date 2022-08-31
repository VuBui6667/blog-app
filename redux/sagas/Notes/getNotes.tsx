import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects"
import { INote } from "../../../pages/posts/[id]"
import { fetchNotesFailure, fetchNotesSuccess } from "../../actions/notes/getNotes"
import { FETCH_NOTES_REQUEST } from "../../types"
import NotesAPI from "../api/NotesAPI"

const getAllNotes = () => {
    return NotesAPI.getAll()
}

function* getData() {
    try {
        const res : INote = yield call(getAllNotes)
        yield put(
            fetchNotesSuccess({
                notes: res
            })
        )
    }
    catch (e) {
        yield put(
            fetchNotesFailure({
                error: e
            })
        )
    }
}

function* getNotesSaga() {
    yield all([takeLatest(FETCH_NOTES_REQUEST, getData)]);
}

export default getNotesSaga