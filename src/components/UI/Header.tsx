import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../router";
import logo from "../../svg/logo.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

interface HeaderProps {
    linkText: string;
    link: string;
}

const Header: FC<HeaderProps> = ({linkText, link}) => {
    const {isAuth} = useTypedSelector(state => state.auth);
    const {logout, setIsVisible} = useActions();
    const navigate = useNavigate();

    return (
        <header 
                className="d-flex align-items-center justify-content-between pt-3 pb-3 ps-5 pe-5 border-bottom"
            >
                <Link
                    to={RouteNames.MAIN}
                    className="d-flex align-items-center nav-link"
                >
                    <img src={logo} alt="logo" className=""/>
                    <h1 className="text-primary fw-bolder ms-3">
                        PostApp
                    </h1>
                </Link>
                {isAuth ?
                    <div className="d-flex">
                        <Link
                            to={link}
                            className="nav-link me-4"
                        >
                            <h1 className="text-secondary fw-semibold">
                                {linkText}
                            </h1>
                        </Link>
                        <button
                            onClick={() => setIsVisible(true)}
                            className="btn btn-primary btn-lg me-2"
                        >
                            Add post
                        </button>
                        <button
                            onClick={logout}
                            className="btn btn-primary btn-lg ms-2"
                        >
                            Logout
                        </button>
                    </div>
                    :
                    <button
                        onClick={() => navigate(RouteNames.LOGIN)}
                        className="btn btn-primary btn-lg"
                    >
                        Login
                    </button>
                }
            </header>
    );
};

export default Header;