import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Loader from "../components/UI/Loader";
import { RouteNames } from "../router";
import CommentItem from "../components/CommentItem";
import PostError from "../components/PostError";

const PostPage: FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const {fetchCurrentComments, fetchCurrentPost} = useActions();
    const {currentPost, currentComments} = useTypedSelector(state => state.postEndComment);
    const {error, isLoading} = useTypedSelector(state => state.errorAndLoading);

    const fetchData = () => {
        fetchCurrentPost(params.id);
        fetchCurrentComments(params.id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="d-flex justify-content-center p-4">
            {isLoading ?
                <Loader/>
                :
                error ?
                    <PostError
                        error={error}
                        fetchData={fetchData}
                        text="Feth post again"
                    />
                    :
                    <div className="conatiner card mt-5 p-2 text-start d-block">
                        <h1 className="text-primary fs-3">
                            {params.id}. - {currentPost.title}
                        </h1>
                        <h2 className="text-secondary">
                            {currentPost.body}
                        </h2>
                        <h1 className="text-secondary fs-4 mt-2 mb-2">
                            Comments:
                        </h1>
                        {currentComments.map(com =>
                            <CommentItem
                                comment={com}
                                key={com.id}
                            />
                        )}
                        <button
                            className="btn btn-danger"
                            onClick={() => navigate(RouteNames.HOME)}
                        >
                            Close
                        </button>
                    </div>
            }
        </div>
    );
};

export default PostPage;