import { axios_instance } from "./AxiosWrapper";

export const patchUserDetail = (
  user_id,
  details,
  setBackendMessage,
  setUser
) => {
  const axios = axios_instance();
  if (details.name === "") {
    setBackendMessage({ success: false, message: "昵称不能为空" });
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
        }
        setBackendMessage({
          success: response.data.success,
          message: response.data.message,
        });
      })
      .catch((e) => {
        setBackendMessage({
          success: e.response.data.success,
          message: e.response.data.message,
        });
      });
  }
};
