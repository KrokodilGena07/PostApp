import { AppDispatch } from "../..";
import CommentService from "../../../API/CommentService";
import PostService from "../../../API/PostService";
import { IComment } from "../../../models/IComment";
import { IPost } from "../../../models/IPost";
import { errorAndLoadingActionCreators } from "../errorAndLoading/actionCreators";
import { AddPostAction, PostAndCommentActionEnum, SetCurrentCommentsAction, SetCurrentPostAction, SetPostsAction } from "./types";

export const postAndCommentActionCreators = {
    setPosts: (payload: IPost[]): SetPostsAction => ({type: PostAndCommentActionEnum.SET_POSTS, payload}),
    setCurrentPost: (payload: IPost): SetCurrentPostAction => ({type: PostAndCommentActionEnum.SET_CURRENT_POST, payload}),
    setCurrentComments: (payload: IComment[]): SetCurrentCommentsAction => ({type: PostAndCommentActionEnum.SET_CURRENT_COMMENTS, payload}),
    addPost: (payload: IPost): AddPostAction => ({type: PostAndCommentActionEnum.ADD_POST, payload}),
    fetchPosts: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(errorAndLoadingActionCreators.setIsLoading(true));
            const response = await PostService.getPosts();
            dispatch(postAndCommentActionCreators.setPosts(response.data));
            dispatch(errorAndLoadingActionCreators.setError(''));
        } catch (e) {
            dispatch(errorAndLoadingActionCreators.setError('Server error. Try again'));
        } finally {
            dispatch(errorAndLoadingActionCreators.setIsLoading(false));
        }
    },
    fetchCurrentPost: (id: string | undefined) => async (dispatch: AppDispatch) => {
        try {
            dispatch(errorAndLoadingActionCreators.setIsLoading(true));
            const response = await PostService.getPostById(id);
            dispatch(postAndCommentActionCreators.setCurrentPost(response.data));
            dispatch(errorAndLoadingActionCreators.setError(''));
        } catch (e) {
            dispatch(errorAndLoadingActionCreators.setError('Server error. Try again'));
        } finally {
            dispatch(errorAndLoadingActionCreators.setIsLoading(false));
        }
    },
    fetchCurrentComments: (id: string | undefined) => async (dispatch: AppDispatch) => {
        try {
            dispatch(errorAndLoadingActionCreators.setIsLoading(true));
            const response = await CommentService.getCommentsById(id);
            dispatch(postAndCommentActionCreators.setCurrentComments(response.data));
            dispatch(errorAndLoadingActionCreators.setError(''));
        } catch (e) {
            dispatch(errorAndLoadingActionCreators.setError('Server error. Try again'));
        } finally {
            dispatch(errorAndLoadingActionCreators.setIsLoading(false));
        }
    }
};