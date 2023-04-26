import axios from "axios";
import { BASE_URL } from "./constant";

export const addCategory = (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.post(`${BASE_URL}category/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getCategories = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(`${BASE_URL}category`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => alert(err));
};

export const deleteCategory = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${BASE_URL}category/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
