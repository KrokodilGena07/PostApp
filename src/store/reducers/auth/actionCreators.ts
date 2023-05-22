import { AppDispatch } from "../..";
import UserService from "../../../API/UserService";
import { IUser } from "../../../models/IUser";
import { RouteNames } from "../../../router";
import { errorAndLoadingActionCreators } from "../errorAndLoading/actionCreators";
import { modalActionCreators } from "../modal/actionCreators";
import { AuthActionEnum, SetIsAuthAction, SetUserAction } from "./types";

export const authActionCreators = {
    setIsAuth: (payload: boolean): SetIsAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload}),
    setUser: (payload: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload}),
    login: (username: string, password: string, navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
        try {
            dispatch(errorAndLoadingActionCreators.setIsLoading(true));
            const response = await UserService.getUsers();
            const mockUser = response.data.find(user => user.username === username && user.password === password);
            if (mockUser) {
                dispatch(authActionCreators.setIsAuth(true));
                dispatch(authActionCreators.setUser(mockUser));
                localStorage.setItem('isAuth', 'true');
                dispatch(errorAndLoadingActionCreators.setError(''));
                navigate(RouteNames.HOME);
            } else {
                dispatch(errorAndLoadingActionCreators.setError('Wrong login or password!'));
                dispatch(modalActionCreators.setIsVisible(true));
            }
        } catch (e) {
            dispatch(errorAndLoadingActionCreators.setError('Server error. Try again'));
        } finally {
            dispatch(errorAndLoadingActionCreators.setIsLoading(false));
        }
    },
    logout: () => (dispatch: AppDispatch) => {
        dispatch(authActionCreators.setIsAuth(false));
        dispatch(authActionCreators.setUser({} as IUser));
        localStorage.removeItem('isAuth');
    }
}