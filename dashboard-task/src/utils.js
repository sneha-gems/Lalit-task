export const TOKEN = "token";
export const USER = "User";

export const getProfileData = () => {
  const user = JSON.parse(localStorage.getItem(USER));
  return user;
};

export const logout = () => {
  localStorage.setItem(TOKEN, "");
};
