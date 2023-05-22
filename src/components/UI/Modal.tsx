import React, { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface ModalProps {
    children: React.ReactNode;
}

const Modal: FC<ModalProps> = ({children}) => {
    const {isVisible} = useTypedSelector(state => state.modal);
    const {setIsVisible} = useActions();
    const rootStyles = ["Modal"];

    if (isVisible) {
        rootStyles.push("ModalActive")
    }

    return (
        <div className={rootStyles.join(" ")} onClick={() => setIsVisible(false)}>
            <div className="ModalContent" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;