import { IComment } from "../../../models/IComment";
import { IPost } from "../../../models/IPost";

export interface PostAndCommentState {
    posts: IPost[];
    currentPost: IPost;
    currentComments: IComment[];
};

export enum PostAndCommentActionEnum {
    SET_POSTS = 'SET_POSTS',
    SET_CURRENT_POST = 'SET_CURRENT_POST',
    SET_CURRENT_COMMENTS = 'SET_CURRENT_COMMENTS',
    ADD_POST = 'ADD_POST'
};

export interface SetPostsAction {
    type: PostAndCommentActionEnum.SET_POSTS;
    payload: IPost[];
};

export interface SetCurrentPostAction {
    type: PostAndCommentActionEnum.SET_CURRENT_POST;
    payload: IPost;
};

export interface SetCurrentCommentsAction {
    type: PostAndCommentActionEnum.SET_CURRENT_COMMENTS;
    payload: IComment[];
};

export interface AddPostAction {
    type: PostAndCommentActionEnum.ADD_POST;
    payload: IPost;
}

export type PostAndCommentAction = 
SetPostsAction | 
SetCurrentPostAction | 
SetCurrentCommentsAction |
AddPostAction;