import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  let after_login_content = "";
  let admin_content = "";

  // check if user is logged in

  // check if the user admin

  return (
    <div>
      <div className="border-1 bg-white w-full shadow-sm rounded-md p-2">
        <ul>
          <li>
            <Link
              to="/"
              className="text-blue-500 py-3 border-t border-b block"
              onClick={props.closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/words"
              className="text-blue-500 py-3 border-b block"
              onClick={props.closeMenu}
            >
              Words
            </Link>
          </li>
          <li>
            <Link
              to="/words"
              className="text-blue-500 py-3 border-b block"
              onClick={props.closeMenu}
            >
              Words2
            </Link>
          </li>
          <li>
            <Link
              to="/words"
              className="text-blue-500 py-3 border-b block"
              onClick={props.closeMenu}
            >
              Words2
            </Link>
          </li>
          <li>
            <Link
              to="/words"
              className="text-blue-500 py-3 border-b block"
              onClick={props.closeMenu}
            >
              Words2
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
