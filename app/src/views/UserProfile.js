import React, { useContext } from "react";
import { useParams } from "react-router";
import { useAxiosGet } from "../utils/HttpRequest";
import UserProfileMenu from "../components/UserProfileMenu";
import { UserContext } from "../UserContext";

function UserProfile() {
  const { user, setUser } = useContext(UserContext);

  const { user_id } = useParams();

  let basicUserProfile = null;

  const url = `${process.env.REACT_APP_API_BASE_URL}/users/${user_id}`;

  let userForShow = useAxiosGet(url);

  if (userForShow.loading) {
    basicUserProfile = <p>Loading...</p>;
  }

  if (userForShow.error) {
    basicUserProfile = <p> error getting user data </p>;
  }

  if (userForShow.data) {
    basicUserProfile = (
      <UserProfileMenu
        userForShow={userForShow.data.response}
        user={user}
        setUser={setUser}
      ></UserProfileMenu>
    );
  }

  return (
    <div className="md:w-4/5 mx-auto flex">
      <div className="w-5/12 p-2">{basicUserProfile}</div>
      <div className="w-7/12 p-2">User contribution for</div>
    </div>
  );
}

export default UserProfile;
