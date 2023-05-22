import React, { FC } from "react";
import { IComment } from "../models/IComment";

interface CommentItemProps {
    comment: IComment
}

const CommentItem: FC<CommentItemProps> = ({comment}) => {
    return (
        <div 
            key={comment.id}
            className="card mt-2 mb-2"
        >
            <p className="card-title text-primary fs-5">
                {comment.name} - {comment.email}
            </p>
            <p className="text-secondary fs-6">
                {comment.body}
            </p>
        </div>
    );
};

export default CommentItem;