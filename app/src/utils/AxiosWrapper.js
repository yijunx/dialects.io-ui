import axios from "axios";

export const axios_instance = () => {
  // will not work with token with httpOnly set!!!
  // A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API
  // const cookies = new Cookies();
  // const token = cookies.get("token");
  return axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 3000,
    // headers: { Authorization: "Bearer " + token },
  });
};
