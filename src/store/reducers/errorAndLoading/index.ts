import { ErrorAndLoadingAction, ErrorAndLoadingActionEnum, ErrorAndLoadingState } from "./types";

const initialState: ErrorAndLoadingState = {
    error: '',
    isLoading: false
};

export const errorAndLoadingReducer = (state=initialState, action: ErrorAndLoadingAction): ErrorAndLoadingState => {
    switch (action.type) {
        case ErrorAndLoadingActionEnum.SET_ERROR:
            return {...state, error: action.payload};
        case ErrorAndLoadingActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        default:
            return state;
    }
};