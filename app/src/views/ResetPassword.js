import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { resetPassword } from "../utils/LoginUtils";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResetPassword() {
  let query = useQuery();

  // console.log(query.get("token"));
  const [backendMessage, setBackendMessage] = useState({
    success: false,
    message: "",
  });

  const [details, setDetails] = useState({
    new_password: "",
    new_password_again: "",
    token: query.get("token"),
  });

  const resetPasswordSubmitHandler = (e) => {
    e.preventDefault();
    resetPassword(details, setBackendMessage);
  };

  const content = (
    <div>
      <form onSubmit={resetPasswordSubmitHandler}>
        <div className="form-inner">
          <div className="form-group">
            {/* <div className="flex items-center text-black-500 text-sm w-full">
                <div>注册用户登录</div>
              </div> */}
            <label htmlFor="new_password" className="text-gray-500 text-sm">
              新密码
            </label>
            <div>
              <input
                type="password"
                name="new_password"
                id="new_password"
                onChange={(e) =>
                  setDetails({ ...details, new_password: e.target.value })
                }
                value={details.new_password}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="new_password_again"
              className="text-gray-500 text-sm"
            >
              新密码再来一遍
            </label>
            <div>
              <input
                type="password"
                name="new_password_again"
                id="new_password_again"
                onChange={(e) =>
                  setDetails({
                    ...details,
                    new_password_again: e.target.value,
                  })
                }
                value={details.new_password_again}
                className="border w-full p-1 text-sm rounded h-7 mb-3"
              />
            </div>
          </div>
          <div className="text-gray-500 text-sm">{backendMessage.message}</div>
          <input
            type="submit"
            value="我这次记住啦"
            className="text-gray-500 text-sm p-1 rounded w-full bg-gray-100 mt-3"
          />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <div>{content}</div>

      <Link to="/" className="text-blue-200">
        click here to go back to home page
      </Link>
    </div>
  );
}

export default ResetPassword;
