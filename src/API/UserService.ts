import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return await axios.get<IUser[]>('https://fakestoreapi.com/users');
    }
};