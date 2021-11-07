import React, { useState } from "react";
import { useParams } from "react-router";
import { useAxiosGet } from "../utils/HttpRequest";
import UserProfileMenu from "../components/UserProfileMenu";
// import { UserContext } from "../UserContext";

function UserProfile() {
  // const { user, setUser } = useContext(UserContext);
  const { user_id } = useParams();

  const url = `${process.env.REACT_APP_API_BASE_URL}/users/${user_id}`;

  let user = useAxiosGet(url);

  let content = null;

  if (user.loading) {
    content = <p>Loading...</p>;
  }

  if (user.error) {
    content = <p> error getting user data </p>;
  }

  if (user.data) {
    content = <UserProfileMenu user={user.data.response}></UserProfileMenu>;
  }
  //   const [error, setError] = useState("");
  //   const [user, setUser] = useState(null);
  //   get_user(user_id, setUser, setError);
  //   console.log("get user is done..");
  //   console.log(user);
  //   const [details, setDetails] = useState({ name: "" });
  //   const patchSubmitHandler = (e) => {
  //     e.preventDefault();
  //     console.log(details);
  //   };

  // get user info
  // if get user info is successful
  // it means this guy is the owner
  //   let user_profile = null;

  //   if (user && user.id === window.localStorage.getItem("id")) {
  //     user_profile = <div>you are the one {user.name}</div>;
  //   } else {
  //     user_profile = <div>you are not the one</div>;
  //   }

  return (
    <div className="md:w-4/5 mx-auto flex">
      <div className="w-5/12 p-2">{content}</div>
      <div className="w-7/12 p-2">User contribution for</div>
    </div>
  );
}

export default UserProfile;
