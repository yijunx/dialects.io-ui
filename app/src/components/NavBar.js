import React, { useContext } from "react";
import { UserContext } from "../UserContext";
// import { Link } from "react-router-dom";

function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full bg-red-50 h-10 mb-3">
      <div className="flex">
        <div className="inline-block">
          <p>something</p>
        </div>
        <div className="inline-block">
          <p>you are {user ? user.name : null}</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
