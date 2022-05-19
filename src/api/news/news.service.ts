import axios from "axios";
import authHeader from "../auth/auth-header";

const API_URL = "http://localhost:5000/api/news/";

export const getAll = () => {
    return axios.get(API_URL + "getAll", {  });
};

export const getAllSimilar = (str: string) => {
    return axios.get(API_URL + "getAll", { params: {title: str} });
};

//administrator проверка админа на сервере
export const update = (id: number, title: string, text: string) => {
    // @ts-ignore
    return axios.post(API_URL + "update", {id, title, text}, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};