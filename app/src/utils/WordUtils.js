import { axios_instance } from "./AxiosWrapper";

export const addWord = (wordCreate, setBackendMessage) => {
  if (wordCreate.email === "" || wordCreate.password === "") {
    setBackendMessage({
      success: false,
      message: "请输入电子邮箱和密码",
    });
  } else {
    const axios = axios_instance();
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + "/private_api/words",
        wordCreate,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json", // <-- here
          },
        }
      )
      .then((response) => {
        if (response.data.success) {
          setUser({
            id: response.data.response.id,
            name: response.data.response.name,
            login_method: response.data.response.login_method,
            email_verified: response.data.response.email_verified,
            admin_info: response.data.response.admin_info,
          });
          // write to localstorage
          window.localStorage.setItem("id", response.data.response.id);
          window.localStorage.setItem("name", response.data.response.name);
          window.localStorage.setItem(
            "email_verified",
            response.data.response.email_verified
          );
          window.localStorage.setItem(
            "login_method",
            response.data.response.login_method
          );
          window.localStorage.setItem(
            "admin_info",
            JSON.stringify(response.data.response.admin_info)
          );

          // no need to do this beause the element will be unmounted
          // setBackendMessage({
          //   success: true,
          //   message: "",
          // });
          // closeMenu();
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
          message: e.response.data.message,
        });
      });
  }
};
