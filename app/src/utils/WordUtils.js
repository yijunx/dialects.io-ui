import { axios_instance } from "./AxiosWrapper";

export const getDialects = () => {
  const axios = axios_instance();

  axios
    .get(
      `${process.env.REACT_APP_API_BASE_URL}/public/words_frontend_utils/dialects`
    )
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        return response.data.response;
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
