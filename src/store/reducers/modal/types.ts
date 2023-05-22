export interface ModalState {
    isVisible: boolean;
};

export enum ModalActionEnum {
    SET_IS_VISIBLE = 'SET_IS_VISIBLE'
};

export interface SetIsVisibleAction {
    type: ModalActionEnum.SET_IS_VISIBLE;
    payload: boolean;
};

export type ModalAction = SetIsVisibleAction;