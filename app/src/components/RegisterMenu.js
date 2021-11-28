import React, { useState } from "react";
import { register } from "../utils/LoginUtils";

function RegisterMenu({ closeMenu }) {
  const [backendMessage, setBackendMessage] = useState({
    success: false,
    message: "最好使用Google直接登录，这样就不用额外记住一个密码啦",
  });
  const [details, setDetails] = useState({ password: "", email: "", name: "" });
  const registerSubmitHandler = (e) => {
    // need to pass the close menu, close menu after login is successful
    e.preventDefault();
    register(details, setBackendMessage);
    // closeMenu() if register success...
    // well do not close ...
    // if (backendMessage.success) {
    //   closeMenu();
    // }
  };

  return (
    <div>
      <div className="border-1 bg-white w-full mb-1 shadow-sm rounded-md p-2">
        <form onSubmit={registerSubmitHandler}>
          <div className="form-inner">
            <div className="form-group">
              {/* <div className="flex items-center text-black-500 text-sm w-full">
                <div>注册用户</div>
              </div> */}
              <label htmlFor="name" className="text-gray-500 text-sm">
                 昵称
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  value={details.name}
                  className="border w-full p-1 text-sm rounded h-7"
                />
              </div>
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
            <div className="text-gray-500 text-sm">
              {backendMessage.message}
            </div>
            <input
              type="submit"
              value="注册"
              className="text-gray-500 text-sm p-1 rounded w-full bg-gray-100 mt-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterMenu;
