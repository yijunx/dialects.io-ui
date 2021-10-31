import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { login, loginWithGoogle } from "../utils/LoginUtils";

function LoginMenu({ closeMenu, setUser }) {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({ password: "", email: "" });
  const loginSubmitHandler = (e) => {
    // need to pass the close menu, close menu after login is successful
    e.preventDefault();
    login(details, setUser, setError);
  };
  const googleLoginHandler = (response) => {
    console.log("here is google response!!");
    console.log(response.tokenId);
    // need to pass the close menu, close menu after login is successful
    loginWithGoogle(response.tokenId, setUser, setError);
    closeMenu();
  };

  return (
    <div>
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={googleLoginHandler}
          onFailure={googleLoginHandler}
          cookiePolicy={"single_host_origin"}
          buttonText="使用谷歌登陆"
          className="w-full mb-3 h-10"
        />
      </div>
      <div className="border-1 bg-white w-full mb-1 shadow-sm rounded-md p-2">
        <form onSubmit={loginSubmitHandler}>
          <div className="form-inner">
            <div className="form-group">
              {/* <div className="flex items-center text-black-500 text-sm w-full">
                <div>注册用户登录</div>
              </div> */}
              <label htmlFor="email" className="text-gray-500 text-sm">
                电子邮箱
              </label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) =>
                    setDetails({ ...details, email: e.target.value })
                  }
                  value={details.email}
                  className="border w-full p-1 text-sm rounded h-7"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password" className="text-gray-500 text-sm">
                密码
              </label>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) =>
                    setDetails({ ...details, password: e.target.value })
                  }
                  value={details.password}
                  className="border w-full p-1 text-sm rounded h-7 mb-3"
                />
              </div>
            </div>
            <div className="text-red-400 text-sm">{error}</div>
            <input
              type="submit"
              value="登陆"
              className="text-gray-500 text-sm p-1 rounded w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginMenu;
