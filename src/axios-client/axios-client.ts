import axios from "axios";

const AxiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_APP_SERVER}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
