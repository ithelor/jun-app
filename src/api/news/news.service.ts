import axios from "axios";

const API_URL = "http://localhost:5000/api/news/";

export const getAll = () => {
    return axios.get(API_URL + "getAll", {  });
};

export const getAllSimilar = (str: string) => {
    return axios.get(API_URL + "getAll", { params: {title: str} });
};
