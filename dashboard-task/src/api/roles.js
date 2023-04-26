import axios from "axios";
import { BASE_URL } from "./constant";

export const addRoles = (data) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.post(`${BASE_URL}roles/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getRoles = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .get(`${BASE_URL}roles`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      callback(res);
    })
    .catch((err) => alert(err?.response?.data?.error?.message));
};

export const deleteRoles = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${BASE_URL}roles/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      alert("delete data successfully");
    })
    .catch((err) => alert(err));
};
