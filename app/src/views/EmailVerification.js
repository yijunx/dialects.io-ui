import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { emailVerification } from "../utils/LoginUtils";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function EmailVerification() {
  let query = useQuery();

  // console.log(query.get("token"));
  const [error, setError] = useState("");

  emailVerification(query.get("token"), setError);

  return <div>{error}</div>;
}

export default EmailVerification;
