import React from "react";
import { logout } from "../utils/LoginUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function LogoutControl({ setUser }) {
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
