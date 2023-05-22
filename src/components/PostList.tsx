import React, { FC } from "react";
import { IPost } from "../models/IPost";
import { useTypedSelector } from "../hooks/useTypedSelector";
import PostItem from "./PostItem";
import Loader from "./UI/Loader";

interface PostListProps {
    title: string;
    posts: IPost[];
}

const PostList: FC<PostListProps> = ({title, posts}) => {
    const {error, isLoading} = useTypedSelector(state => state.errorAndLoading);

    return (
        <div className="d-flex justify-content-center">
            {isLoading ?
                <Loader/>
                :
                <div>
                    {error ?
                        <h1 className="text-center fw-bolder mt-3 fs-1 text-danger">{error}</h1>
                        :
                        <h1 className="text-center fw-bolder mt-3 fs-1 text-primary">{title}</h1>
                    }
                    {posts.map((post, index) =>
                        <PostItem
                            post={post}
                            index={index + 1}
                            key={post.id}
                        />
                    )}
                </div>
            }
        </div>
    );
};

export default PostList;