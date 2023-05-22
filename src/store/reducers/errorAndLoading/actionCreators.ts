import { ErrorAndLoadingActionEnum, SetErrorAction, SetIsLoadingAction } from "./types";

export const errorAndLoadingActionCreators = {
    setError: (payload: string): SetErrorAction => ({type: ErrorAndLoadingActionEnum.SET_ERROR, payload}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: ErrorAndLoadingActionEnum.SET_IS_LOADING, payload})
};