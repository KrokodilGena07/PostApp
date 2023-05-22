import React, { FC, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { IPost } from "../models/IPost";

const PostForm: FC = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const {isLoading} = useTypedSelector(state => state.errorAndLoading);
    const {addPost, setIsVisible} = useActions();

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPost: IPost = {
            title, body, id: Date.now()
        };
        addPost(newPost);
        setIsVisible(false);
        setTitle('');
        setBody('');
    }

    return (
        <form onSubmit={e => submit(e)}>
            <h3 className="text-center text-primary fw-bold">
                PostForm
            </h3>
            <div className="mb-3 ms-4 me-4">
                    <label 
                        htmlFor="title" 
                        className="form-label"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control" 
                        id="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3 ms-4 me-4">
                    <label
                        htmlFor="body" 
                        className="form-label"
                    >
                        Body
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="body"
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        required
                    />
                </div>
                <button 
                    className="btn btn-primary ms-4 me-4"
                >
                    {isLoading &&
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden='true'/>
                    }
                    Submit
                </button>
        </form>
    );
};

export default PostForm;