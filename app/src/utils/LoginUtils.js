import { useEffect } from "react";
import axios from "axios";

export const CSRF = () => {
  useEffect(() => {
    const getCsrfToken = () => {
      axios
        .get(process.env.REACT_APP_API_BASE_URL + "/csrf-token")
        .then((response) => {
          console.log(response);
          // here i use .common, because backend all endpoints will check CSRF, include get
          // seems that can use .post.. but backend needs to do the changes..
          axios.defaults.headers.common["X-CSRF-Token"] =
            response.data.myCsrfToken;
        });
    };

    getCsrfToken();
  }, []);
};

export const registerUserWithPassword = (details, setBackendMessage) => {
  console.log(details);
  axios
    .post(process.env.REACT_APP_API_BASE_URL + "/register", details, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // <-- here
      },
    })
    .then((response) => {
      setBackendMessage({
        success: response.data.success,
        message: response.data.message,
      });
    })
    .catch((e) => {
      setBackendMessage({
        success: false,
        message: "Error connecting backend",
      });
    });
};

export const loginWithGoogle = (id_token, setUser, setBackendMessage) => {
  console.log(id_token);
  axios
    .post(
      process.env.REACT_APP_API_BASE_URL + "/login_with_google",
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // <-- here
          Authorization: "Bearer " + id_token,
        },
      }
    )
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        setUser({
          id: response.data.response.id,
          name: response.data.response.name,
          login_method: response.data.response.login_method,
        });
        console.log("logged in");
        // write to localstorage
        window.localStorage.setItem("id", response.data.response.id);
        window.localStorage.setItem("name", response.data.response.name);
        window.localStorage.setItem(
          "login_method",
          response.data.response.login_method
        );
        setBackendMessage({
          success: true,
          message: "",
        });
      } else {
        console.log("dtail not match");
        setBackendMessage({
          success: false,
          message: response.data.message,
        });
      }
    })
    .catch((e) => {
      console.log(e);
      setBackendMessage({
        success: false,
        message: "Error connecting to backend",
      });
    });
};

export const emailVerification = (token, setBackendMessage) => {
  axios
    .get(
      process.env.REACT_APP_API_BASE_URL + `/email_verification?token=${token}`
    )
    .then((response) => {
      setBackendMessage({
        success: response.data.success,
        message: response.data.message,
      });
    })
    .catch((e) => {
      setBackendMessage({
        success: false,
        message: "Error connecting backend",
      });
    });
};

export const register = (details, setBackendMessage) => {
  console.log(details);
  if (
    (details.name === "") |
    (details.email === "") |
    (details.password === "")
  ) {
    setBackendMessage({
      success: false,
      message: "请输入昵称，电子邮件和密码",
    });
  } else {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/register", details, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // <-- here
        },
      })
      .then((response) => {
        console.log(response);
        setBackendMessage({
          success: response.data.success,
          message: response.data.message,
        });
      })
      .catch((e) => {
        setBackendMessage({
          success: false,
          message: "Error connecting to backend",
        });
      });
  }
};

export const forgetPassword = (details, setBackendMessage) => {
  if (details.email === "") {
    setBackendMessage({
      success: false,
      message: "请输入电子邮箱地址以便发送邮件来重新设置密码",
    });
  } else {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + `/forget_password`, details, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // <-- here
        },
      })
      .then((response) => {
        setBackendMessage({
          success: response.data.success,
          message: response.data.message,
        });
      })
      .catch(() => {
        setBackendMessage({
          success: false,
          message: "Error connecting to backend",
        });
      });
  }
};

export const resetPassword = (details, setBackendMessage) => {
  if (
    details.new_password === "" ||
    details.new_password !== details.new_password_again
  ) {
    setBackendMessage({
      success: false,
      message: "两个密码不一样或者密码为空",
    });
  } else {
    axios
      .post(
        process.env.REACT_APP_API_BASE_URL + `/reset_password_without_login`,
        details,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json", // <-- here
          },
        }
      )
      .then((response) => {
        setBackendMessage({
          success: response.data.success,
          message: response.data.message,
        });
      })
      .catch((e) => {
        setBackendMessage({
          success: false,
          message: "Error connecting to backend",
        });
      });
  }
};

export const login = (details, setUser, setBackendMessage) => {
  if (details.email === "" || details.password === "") {
    setBackendMessage({
      success: false,
      message: "请输入电子邮箱和密码",
    });
  } else {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/login", details, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json", // <-- here
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setUser({
            id: response.data.response.id,
            name: response.data.response.name,
            login_method: response.data.response.login_method,
          });
          console.log("yeah forget is successful");
          // write to localstorage
          window.localStorage.setItem("id", response.data.response.id);
          window.localStorage.setItem("name", response.data.response.name);
          window.localStorage.setItem(
            "login_method",
            response.data.response.login_method
          );
          setBackendMessage({
            success: true,
            message: "",
          });
        } else {
          setBackendMessage({
            success: false,
            message: response.data.message,
          });
        }
      })
      .catch((e) => {
        // console.log(e.response.status);
        // console.log(e.response.data.message);
        setBackendMessage({
          success: false,
          message: e.response.data.message,
        });
      });
  }
};

export const logout = (setUser) => {
  console.log("Logout");
  // setUser to null
  setUser(null);
  // need to take out the cookie
  axios
    .post(process.env.REACT_APP_API_BASE_URL + "/logout")
    .then((response) => {
      console.log(response);
    });
  // erase local storage
  window.localStorage.removeItem("id");
  window.localStorage.removeItem("name");
  window.localStorage.removeItem("login_method");
};

export const getCurrentUser = () => {
  if (window.localStorage.getItem("name")) {
    return {
      id: window.localStorage.getItem("id"),
      name: window.localStorage.getItem("name"),
      login_method: window.localStorage.getItem("login_method"),
    };
  } else {
    return null;
  }
};
