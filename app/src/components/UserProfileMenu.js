import React, { useState } from "react";

function UserProfileMenu({ user }) {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    name: user.name,
  });

  const patchDetailsSubmitHandler = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div>
      <div className="border-1 bg-blue-100">
        <form onSubmit={patchDetailsSubmitHandler}>
          <div className="form-inner">
            <div className="form-group">
              <label htmlFor="name" className="text-gray-500">
                 昵称
              </label>
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) =>
                    setDetails({ ...details, name: e.target.value })
                  }
                  value={details.name}
                  className="border w-full p-1 text-sm rounded h-7"
                />
              </div>
            </div>
            <div className="text-red-400 text-sm">{error}</div>
            <input
              type="submit"
              value="update"
              className="text-gray-500 text-sm p-1 rounded w-full bg-gray-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfileMenu;
