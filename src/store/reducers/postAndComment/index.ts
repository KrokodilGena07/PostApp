import { IPost } from "../../../models/IPost";
import { PostAndCommentAction, PostAndCommentActionEnum, PostAndCommentState } from "./types";

const initialState: PostAndCommentState = {
    posts: [],
    currentPost: {} as IPost,
    currentComments: []
};

export const postAndCommentReducer = (state=initialState, action: PostAndCommentAction): PostAndCommentState => {
    switch (action.type) {
        case PostAndCommentActionEnum.SET_POSTS:
            return {...state, posts: action.payload};
        case PostAndCommentActionEnum.SET_CURRENT_POST:
            return {...state, currentPost: action.payload};
        case PostAndCommentActionEnum.SET_CURRENT_COMMENTS:
            return {...state, currentComments: action.payload};
        case PostAndCommentActionEnum.ADD_POST:
            return {...state, posts: [...state.posts, action.payload]}
        default:
            return state;
    }
};