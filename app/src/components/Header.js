import React, { useContext } from "react";
import LoginControl from "./LoginControl";
import LogoutControl from "./LogoutControl";
import RegisterControl from "./RegisterControl";
import { UserContext } from "../UserContext";

function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <header className="bg-green-100 p-2 flex justify-between items-center h-10">
      <div> dialects.io </div>

      <div>
        {user ? (
          <LogoutControl setUser={setUser}></LogoutControl>
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
