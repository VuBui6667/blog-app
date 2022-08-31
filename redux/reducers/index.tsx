import { combineReducers } from "redux"
import modalAddReducer from "./modalAdd/modalAdd";
import notesReducer from "./Notes/index";
import toggleReducer from "./toggleSideBar/toggle";

const rootReducers = combineReducers({
    toggleReducer,
    modalAddReducer,
    notesReducer,
})

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;