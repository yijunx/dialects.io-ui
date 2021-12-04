import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

function NavBar(props) {
  // this nav bar will have 3 sections

  // section 1 : generic user function (without login also can)
  // view random words -> citiao
  // about -> guan yu ben zhan

  // section 2 : a search box

  // section 3 : admin user function
  // manage words
  // manage users

  // let admin_content = "";

  // check if user is logged in

  // check if the user admin

  return (
    <div>
      <p></p>
      <div className="border-1 bg-white w-full shadow-sm rounded-md p-2 mb-2">
        <ul>
          <li>
            <Link
              to="/words"
              className="text-gray-500 p-1 block text-base text-center bg-gray-100 rounded"
              onClick={props.closeMenu}
            >
              浏览词条
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-gray-500 p-1 block text-base text-center bg-gray-100 rounded mt-2"
              onClick={props.closeMenu}
            >
              关于此站
            </Link>
          </li>
          <li>
            <Link
              to="/support"
              className="text-gray-500 p-1 block text-base text-center bg-gray-100 rounded mt-2"
              onClick={props.closeMenu}
            >
              支持一下
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-1 bg-white w-full shadow-sm rounded-md p-2 mb-2">
        <SearchBox></SearchBox>
      </div>
      <div className="border-1 bg-white w-full shadow-sm rounded-md p-2">
        i am admin function like manage users and words
      </div>
    </div>
  );
}

export default NavBar;
