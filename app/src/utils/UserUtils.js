import { axios_instance } from "./AxiosWrapper";

export const patchUserDetail = (user_id, details, setError, setUser) => {
  const axios = axios_instance();
  if (details.name === "") {
    setError("Please Fill Up all fields");
  } else {
    axios
      .patch(`${process.env.REACT_APP_API_BASE_URL}/users/${user_id}`, details)
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setUser({
            id: response.data.response.id,
            name: response.data.response.name,
            login_method: response.data.response.login_method,
          });
          window.localStorage.setItem("name", response.data.response.name);
        } else {
          setError(response.data.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
};
