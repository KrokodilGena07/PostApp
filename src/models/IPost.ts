import { IComment } from "./IComment";

export interface IPost {
    id: number,
    title: string;
    body: string;
    comments?: IComment[];
};