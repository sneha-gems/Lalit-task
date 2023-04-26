import axios from "axios";
import { BASE_URL } from "./constant";

export const getUsers = (callback) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log("token", token);
  axios
    .get(`${BASE_URL}users`, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      console.log(res);
      callback(res);
    })
    .catch((error) => alert(error));
};

export const getUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios.get(`${BASE_URL}users/admin/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
