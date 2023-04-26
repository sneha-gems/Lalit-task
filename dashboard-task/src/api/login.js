import axios from "axios";
import { BASE_URL } from "./constant";

export const login = (data, callback) => {
  axios
    .post(`${BASE_URL}auth/login`, data)
    .then((response) => {
      localStorage.setItem("token", JSON.stringify(response?.data?.token));
      callback(response);
    })
    .catch((error) => alert(error));
};
