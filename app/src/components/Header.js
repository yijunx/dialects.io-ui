import React, { useContext } from "react";
import LoginControl from "./LoginControl";
import LogoutControl from "./LogoutControl";
import NavBarControl from "./NavBarControl";
import UserProfileControl from "./UserProfileControl";
import RegisterControl from "./RegisterControl";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="bg-green-100 p-2 flex justify-between buttom-0 w-full items-center h-10">
      <div>
        <div className="flex inline-block">
          <NavBarControl></NavBarControl>
          <Link to="/" className="text-gray-500 font-bold">
            一个方言的网站
          </Link>
        </div>
      </div>

      <div>
        {user ? (
          <div className="flex inline-block">
            <UserProfileControl user={user}></UserProfileControl>
            <LogoutControl></LogoutControl>
          </div>
        ) : (
          <div className="flex inline-block">
            <RegisterControl></RegisterControl>
            <LoginControl></LoginControl>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
