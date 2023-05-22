import React, { FC } from "react";
import Header from "../components/UI/Header";
import { RouteNames } from "../router";

const Main: FC = () => {
    return (
        <div>
            <Header
                linkText="Posts"
                link={RouteNames.HOME}
            />
            <main className="text-center mt-5">
                <h1 className="text-primary fw-bolder fs-1">
                    PostApp - the best service for posts
                </h1>
                <h2 className="text-secondary">
                    Add posts every day
                </h2>
            </main>
        </div>
    );
};

export default Main;