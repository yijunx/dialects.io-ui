import React, { useContext } from "react";
import LoginControl from "./LoginControl";
import LogoutControl from "./LogoutControl";
import UserProfileControl from "./UserProfileControl";
import RegisterControl from "./RegisterControl";
import { UserContext } from "../UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <header className="bg-green-100 p-2 flex justify-between items-center h-10">
      <div> 一个网站 </div>

      <div>
        {user ? (
          <div className="flex inline-block">
            <UserProfileControl user={user}></UserProfileControl>
            <LogoutControl setUser={setUser}></LogoutControl>
          </div>
        ) : (
          <div className="flex inline-block">
            <RegisterControl></RegisterControl>
            <LoginControl setUser={setUser}></LoginControl>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
