import { ModalAction, ModalActionEnum, ModalState } from "./types";

const initialState: ModalState = {
    isVisible: false
};

export const modalReducer = (state=initialState, action: ModalAction): ModalState => {
    switch (action.type) {
        case ModalActionEnum.SET_IS_VISIBLE:
            return {...state, isVisible: action.payload};
        default:
            return state;
    }
};