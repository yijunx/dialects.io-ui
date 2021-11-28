import React, { useContext } from "react";
import { logout } from "../utils/LoginUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../UserContext";

function LogoutControl() {
  const { setUser } = useContext(UserContext);
  const submithandler = (e) => {
    e.preventDefault();
    logout(setUser);
  };
  return (
    <div>
      <FontAwesomeIcon icon={faSignOutAlt} onClick={submithandler} />
    </div>
  );
}

export default LogoutControl;
