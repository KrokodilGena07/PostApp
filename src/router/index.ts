import Login from "../pages/Login";
import Main from "../pages/Main";
import PostPage from "../pages/PostPage";
import Posts from "../pages/Posts";

interface IRoute {
    path: string;
    element: React.FC;
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    MAIN = '/main',
    POST_PAGE = '/posts/:id'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: Main},
    {path: RouteNames.LOGIN, element: Login},
    {path: '*', element: Main}
];

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, element: Posts},
    {path: RouteNames.MAIN, element: Main},
    {path: RouteNames.POST_PAGE, element: PostPage},
    {path: '*', element: Posts}
];