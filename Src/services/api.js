import axios from "axios";
const BASE_URL = "https://reqres.in/api";

const api = axios.create({ baseURL: BASE_URL });
export default api;
