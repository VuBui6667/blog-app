const initialState = {
    openModal: false,
    title: "",
    content: ""
}

export interface IValue {
    openModal: boolean,
    title: String,
    content: String
}

interface IAction {
    type: String,
    payload: number
}

const modalAddReducer = (state:IValue = initialState, action:IAction) => {
    switch (action.type) {
        case 'OPEN_MODAL': {
            return {
                ...state,
                openModal: true
            }
        }   
        case 'CLOSE_MODAL': {
            return {
                ...state,
                openModal: false
            }
        }   
        default:
            return state;
    }
};

export default modalAddReducer;