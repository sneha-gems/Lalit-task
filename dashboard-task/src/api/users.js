import axios from "axios";
import { BASE_URL, getHeaders } from "./constant";

export const getUsers = (callback) => {
  axios
    .get(`${BASE_URL}/users`, { headers: getHeaders() })
    .then((res) => {
      callback(res);
    })
    .catch((error) => alert(error?.response?.data?.error?.message));
};

export const getUser = (id) => {
  axios.get(`${BASE_URL}/users/self/${id}`, {
    headers: getHeaders(),
  });
};
