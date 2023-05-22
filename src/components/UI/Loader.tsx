import React, { FC } from "react";

const Loader: FC = () => {
    return (
        <div className="spinner-border text-primary Loader" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loader;