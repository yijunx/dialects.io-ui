import { axios_instance } from "./AxiosWrapper";

export const addWord = (wordCreate, setBackendMessage, closeMenu) => {
  if (
    wordCreate.title.trim() === "" ||
    wordCreate.dialect.trim() === "" ||
    wordCreate.tags.length === 0 ||
    wordCreate.explanation.trim() === ""
  ) {
    setBackendMessage({
      success: false,
      message: "请输入所有的加粗的部分，谢谢！",
    });
  } else {
    const axios = axios_instance();
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/private/words", wordCreate, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // <-- here
        },
      })
      .then((response) => {
        if (response.data.success) {
          // direct to another page...
          //   no need to do this beause the element will be unmounted
          setBackendMessage({
            success: true,
            message: "word created ! thanks a lot",
          });
          closeMenu();
        } else {
          setBackendMessage({
            success: response.data.success,
            message: response.data.message,
          });
        }
      })
      .catch((e) => {
        // console.log(e.response.status);
        // console.log(e.response.data.message);
        setBackendMessage({
          success: e.response.data.success,
          message: "some server error with status code: " + e.response.status,
        });
      });
  }
};
