import axios, { AxiosResponse } from "axios";
import { IComment } from "../models/IComment";

export default class CommentService {
    static async getCommentsById(id: string | undefined): Promise<AxiosResponse<IComment[]>> {
        return await axios.get<IComment[]>("https://jsonplaceholder.typicode.com/posts/" + id + "/comments");
    }
};