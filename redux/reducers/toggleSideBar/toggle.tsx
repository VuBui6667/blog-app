const initialState = {
    toggle: true,
}

export interface IValue {
    toggle: boolean,
}

interface IAction {
    type: String,
}

const counterReducer = (state:IValue = initialState, action:IAction) => {
    switch (action.type) {
        case "TRUE": {
            return {
                ...state,
                toggle: true
        }
    }   
        case "FALSE": {
            return {
                ...state,
                toggle: false
            }
        }
        default:
            return state;
    }
};

export default counterReducer;