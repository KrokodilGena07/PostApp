import React, { FC, useEffect } from "react";
import Header from "../components/UI/Header";
import { RouteNames } from "../router";
import PostList from "../components/PostList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import PostError from "../components/PostError";
import Modal from "../components/UI/Modal";
import PostForm from "../components/PostForm";

const Posts: FC = () => {
    const {posts} = useTypedSelector(state => state.postEndComment);
    const {error} = useTypedSelector(state => state.errorAndLoading);
    const {fetchPosts} = useActions();

    useEffect(() => {
        fetchPosts();
    }, [])
    
    return (
        <div>
            <Modal>
                <PostForm/>
            </Modal>
            <Header
                linkText="Home"
                link={RouteNames.MAIN}
            />
            {error ?
                <div className="d-flex justify-content-center">
                    <PostError
                        fetchData={fetchPosts}
                        error={error}
                        text="Fetch posts again"
                    />
                </div>
                :
                <main>
                    <PostList 
                        title="PostList"
                        posts={posts}
                    />
                </main>
            }
        </div>
    );
};

export default Posts;