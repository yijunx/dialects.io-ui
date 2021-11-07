import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UserProfileControl({ user }) {
  return (
    <div className="mr-2">
      <Link to="/user_profile">
        <span className="mr-2">{user.name}</span>
        <FontAwesomeIcon icon={faUser} />
      </Link>
    </div>
  );
}

export default UserProfileControl;
