import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    username: string;
    password: string;
    setUsername: (state: string) => void;
    setPassword: (state: string) => void;
}

const LoginForm: FC<LoginFormProps> = ({username, password, setUsername, setPassword}) => {
    const {login} = useActions();
    const {isLoading} = useTypedSelector(state => state.errorAndLoading);
    
    const navigate = useNavigate();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(username, password, navigate);
    };

    return (
        <form 
                className="flex-column d-flex card conatiner p-4 mt-5 align-self-center LoginForm needs-validation"
                onSubmit={e => submit(e)}
            >
                <div className="mb-3">
                    <label 
                        htmlFor="username" 
                        className="form-label"
                    >
                        Login
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        id="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="password" 
                        className="form-label"
                    >
                        Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button 
                    className="btn btn-primary"
                >
                    {isLoading &&
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden='true'/>
                    }
                    Submit
                </button>
            </form>
    );
};

export default LoginForm;