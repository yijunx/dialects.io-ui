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

export const registerUserWithPassword = (details, setError) => {
  console.log(details);
  axios
    .post(process.env.REACT_APP_API_BASE_URL + "/register", details, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json", // <-- here
      },
    })
    .then((response) => {
      console.log(response);
      if (response.data.success) {
        // setUser({
        //   name: response.data.response.name,
        //   email: response.data.response.email,
        // });
        console.log("registered");
        setError("an email is sent, pls click the link there");
      } else {
        setError(response.data.message);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const loginWithGoogle = (id_token, setUser, setError) => {
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
      } else {
        console.log("dtail not match");
        setError("Details do not match!!!");
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const emailVerification = (token, setError) => {
  axios
    .get(
      process.env.REACT_APP_API_BASE_URL + `/email_verification?token=${token}`
    )
    .then((response) => {
      setError("email verified");
    })
    .catch((e) => {
      setError("email not verified");
    });
};

export const register = (details, setError) => {
  console.log(details);
  if (
    (details.name === "") |
    (details.email === "") |
    (details.password === "")
  ) {
    setError("Please Fill Up all fields");
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
        if (response.data.success) {
          console.log("registered!");
          setError("user registered, pls do email verification, pls pls pls.");
        } else {
          setError(response.data.message);
        }
      })
      .catch((e) => {
        setError(e.response.data.message);
      });
  }
};

export const login = (details, setUser, setError) => {
  console.log(details);
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
        console.log("logged in");
        // write to localstorage
        window.localStorage.setItem("id", response.data.response.id);
        window.localStorage.setItem("name", response.data.response.name);
        window.localStorage.setItem(
          "login_method",
          response.data.response.login_method
        );
      } else {
        console.log("dtail not match");
        setError(response.data.message);
      }
    })
    .catch((e) => {
      console.log(e.response.status);
      console.log(e.response.data.message);
      setError(e.response.data.message);
    });
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
