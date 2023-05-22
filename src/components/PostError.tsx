import React, { FC } from "react";

interface PostErrorProps {
    error: string;
    fetchData: () => void,
    text: string
}

const PostError: FC<PostErrorProps> = ({error, fetchData, text}) => {
    return (
        <div className="d-block">
            <h1 className="fs-1 text-danger">
            {error}
            </h1>
            <button
                onClick={fetchData}
                className="btn btn-danger"
            >
                {text}
            </button>
        </div>
    );
};

export default PostError;