import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Modal from "../components/UI/Modal";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
    const {setIsVisible} = useActions();
    const {error} = useTypedSelector(state => state.errorAndLoading);

    const [username, setUsername] = useState('johnd');
    const [password, setPassword] = useState('m38rmF$');

    const setFields = () => {
        setUsername('johnd');
        setPassword('m38rmF$');
        setIsVisible(false);
    }

    return (
        <div className="d-flex justify-content-center LoginPage">
            <Modal>
                <h3 className="text-center text-danger">
                    {error}
                </h3>
                <h4 className="text-secondary text-center mt-1">
                    Unfortunately, it is only frontend app, you can't create own account, only auth
                </h4>
                <div className="mt-4 d-flex justify-content-end">
                    <button
                        className="btn btn-secondary"
                        onClick={() => setIsVisible(false)}
                    >
                        Close
                    </button>
                    <button 
                        className="btn btn-primary  ms-3"
                        onClick={setFields}
                    >
                        fill in the fields
                    </button>
                </div>
            </Modal>
            <LoginForm
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </div>
    );
};

export default Login;