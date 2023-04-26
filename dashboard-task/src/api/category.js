import axios from "axios";
import { BASE_URL, getHeaders } from "./constant";

export const addCategory = (data) => {
  axios.post(`${BASE_URL}/category/`, data, {
    headers: getHeaders(),
  });
};

export const getCategories = (callback) => {
  axios
    .get(`${BASE_URL}/category`, {
      headers: getHeaders(),
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => alert(err?.response?.data?.error?.message));
};

export const deleteCategory = (id) => {
  axios
    .delete(`${BASE_URL}/category/${id}`, {
      headers: getHeaders(),
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
