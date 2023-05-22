import axios, { AxiosResponse } from "axios";
import { IPost } from "../models/IPost";

export default class PostService {
    static async getPosts(): Promise<AxiosResponse<IPost[]>> {
        return await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
    }
    static async getPostById(id: string | undefined): Promise<AxiosResponse<IPost>> {
        return await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + id);
    }
};