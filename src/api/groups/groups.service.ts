import axios from "axios";
import authHeader from "../auth/auth-header";
const API_URL = "http://localhost:5000/api/groups/";

export const add = (name: string, desc: string) => {
    // @ts-ignore
    return axios.post(API_URL + "add", {name, desc}, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

export const sendRequest = (id: string) => {
    // @ts-ignore
    return axios.post(API_URL + "sendRequest/"+id, {}, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

export const acceptStudent = (user: string, id: string) => {
    // @ts-ignore
    return axios.post(API_URL + "acceptStudent", {user, id}, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

export const getAll = () => {
    return axios.get(API_URL + "getAll", {  });
};