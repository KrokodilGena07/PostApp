import { IUser } from "../../../models/IUser";
import { AuthAction, AuthActionEnum, AuthState } from "./types";

const initialState: AuthState = {
    isAuth: false,
    user: {} as IUser
};

export const authReducer = (state=initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionEnum.SET_IS_AUTH:
            return {...state, isAuth: action.payload};
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
};