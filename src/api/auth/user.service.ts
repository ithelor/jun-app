import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:5000/api/";
export const getUserProfile = () => {
    // @ts-ignore
    return axios.get(API_URL + "user/profile", { headers: authHeader() });
};
