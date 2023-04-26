import axios from "axios";
import { BASE_URL, getHeaders } from "./constant";

export const deleteUser = (id) => {
  axios
    .delete(`${BASE_URL}/users/${id}`, {
      headers: getHeaders(),
    })
    .then((res) => console.log("res", res))
    .catch((err) => alert(err));
};
