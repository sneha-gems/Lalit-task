export const BASE_URL = "http://localhost:8091/api/v1";

export const getHeaders = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return { Authorization: `Bearer ${token} ` };
};
