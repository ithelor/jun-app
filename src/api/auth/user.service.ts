import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:5000/api/user/";
export const getUserProfile = () => {
    // @ts-ignore
    return axios.get(API_URL + "profile", { headers: authHeader() });
};
