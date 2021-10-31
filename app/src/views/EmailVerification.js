import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { emailVerification } from "../utils/LoginUtils";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EmailVerification() {
  let query = useQuery();

  // console.log(query.get("token"));
  const [error, setError] = useState("");

  emailVerification(query.get("token"), setError);

  return (
    <div>
      <p>{error}</p>

      <Link to="/" className="text-blue-200">
        click here to go back to home page
      </Link>
    </div>
  );
}

export default EmailVerification;
