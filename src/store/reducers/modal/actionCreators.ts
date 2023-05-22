import { ModalActionEnum, SetIsVisibleAction } from "./types";

export const modalActionCreators = {
    setIsVisible: (payload: boolean): SetIsVisibleAction => ({type: ModalActionEnum.SET_IS_VISIBLE, payload})
};