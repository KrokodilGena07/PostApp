import { IUser } from "../../../models/IUser";

export interface AuthState {
    isAuth: boolean;
    user: IUser;
};

export enum AuthActionEnum {
    SET_IS_AUTH = 'SET_IS_AUTH',
    SET_USER = 'SET_USER'
};

export interface SetIsAuthAction {
    type: AuthActionEnum.SET_IS_AUTH;
    payload: boolean;
};

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
};

export type AuthAction = SetIsAuthAction | SetUserAction;