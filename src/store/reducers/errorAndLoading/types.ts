export interface ErrorAndLoadingState {
    error: string;
    isLoading: boolean;
};

export enum ErrorAndLoadingActionEnum {
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
};

export interface SetErrorAction {
    type: ErrorAndLoadingActionEnum.SET_ERROR;
    payload: string;
};

export interface SetIsLoadingAction {
    type: ErrorAndLoadingActionEnum.SET_IS_LOADING;
    payload: boolean;
};

export type ErrorAndLoadingAction = SetErrorAction | SetIsLoadingAction;