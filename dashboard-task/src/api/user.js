import axios from "axios";
import { BASE_URL } from "./constant";

export const deleteUser = (id) => {
  const token = JSON.parse(localStorage.getItem("token"));
  axios
    .delete(`${BASE_URL}users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => console.log("res", res))
    .catch((err) => alert(err));
};
