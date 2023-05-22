import { authReducer } from "./auth";
import { errorAndLoadingReducer } from "./errorAndLoading";
import { modalReducer } from "./modal";
import { postAndCommentReducer } from "./postAndComment";

export const reducers = {
    modal: modalReducer,
    errorAndLoading: errorAndLoadingReducer,
    auth: authReducer,
    postEndComment: postAndCommentReducer
};