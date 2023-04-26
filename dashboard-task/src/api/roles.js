import axios from "axios";
import { BASE_URL, getHeaders } from "./constant";

export const addRoles = (data) => {
  axios.post(`${BASE_URL}/roles/`, data, {
    headers: getHeaders(),
  });
};

export const getRoles = (callback) => {
  axios
    .get(`${BASE_URL}/roles`, {
      headers: getHeaders(),
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => alert(err?.response?.data?.error?.message));
};

export const deleteRoles = (id) => {
  axios
    .delete(`${BASE_URL}/roles/${id}`, {
      headers: getHeaders(),
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
