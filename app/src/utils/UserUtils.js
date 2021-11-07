import { axios_instance } from "./AxiosWrapper";

export const patchUserDetail = (user_id, details, setError, setUser) => {
  const axios = axios_instance();
  if (details.name === "") {
    setError("Please Fill Up all fields");
  } else {
    axios
      .patch(`${process.env.REACT_APP_API_BASE_URL}/users/${user_id}`, details)
      .then();
  }
};
