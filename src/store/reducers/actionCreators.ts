import { authActionCreators } from "./auth/actionCreators";
import { errorAndLoadingActionCreators } from "./errorAndLoading/actionCreators";
import { modalActionCreators } from "./modal/actionCreators";
import { postAndCommentActionCreators } from "./postAndComment/actionCreators";

export const allActionCreators = {
    ...modalActionCreators,
    ...errorAndLoadingActionCreators,
    ...authActionCreators,
    ...postAndCommentActionCreators
};