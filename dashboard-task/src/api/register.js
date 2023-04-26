import axios from "axios";
import { BASE_URL } from "./constant";

export const register = (data, callback) => {
  axios
    .post(`${BASE_URL}auth/register`, data)
    .then((response) => {
      callback(response);
    })
    .catch((error) => alert(error));
};
