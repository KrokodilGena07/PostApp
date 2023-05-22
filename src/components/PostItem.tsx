import React, { FC } from "react";
import { IPost } from "../models/IPost";
import { useNavigate } from "react-router-dom";

interface PostItemProps {
    post: IPost;
    index: number;
}

const PostItem: FC<PostItemProps> = ({post, index}) => {
    const navigate = useNavigate();

    return (
        <div 
            className="container card mt-4 p-2 d-block">
            <h1 className="card-title text-primary fs-4">
                {index}. - {post.title}
            </h1>
            <h2 className="card-body text-secondary fs-5">
                {post.body}
            </h2>
            <button 
                className="btn btn-primary"
                onClick={() => navigate('posts/' + post.id)}
            >
                Open
            </button>
        </div>
    );
};

export default PostItem;