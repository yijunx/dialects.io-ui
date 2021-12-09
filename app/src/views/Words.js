import React, { useState, useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { useAxiosGet } from "../utils/HttpRequest";
import { UserContext } from "../UserContext";

// need to use  params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Words() {
  let query = useQuery();
  // figure out the url string
  const wordQuery = {
    title: query.get("title"),
    tag: query.get("tag"),
    dialect: query.get("dialect"),
    page: query.get("page") || 1,
    size: query.get("size") || 5,
  };

  let queryString = `?page=${wordQuery.page}&size=${wordQuery.size}`;
  console.log(queryString);
  const { user, _ } = useContext(UserContext);

  let wordsContent = null;

  const url = `${process.env.REACT_APP_API_BASE_URL}/public/words${queryString}`;

  let wordsPublicGet = useAxiosGet(url);

  // also need to remember the wordQuery

  // the button click is actually direct to another page

  if (wordsPublicGet.loading) {
    wordsContent = <p>Loading...</p>;
  }

  if (wordsPublicGet.error) {
    wordsContent = <p>Error getting data with error</p>;
  }

  if (wordsPublicGet.data) {
    wordsContent = JSON.stringify(wordsPublicGet.data.response);
  }

  // console.log(query.get("token"));
  //   const [backendMessage, setBackendMessage] = useState({
  //     success: false,
  //     message: "",
  //   });

  //   emailVerification(query.get("token"), setBackendMessage);

  return (
    <div className="md:w-1/2 mx-auto bg-green-50 p-4 rounded-lg text-gray-600">
      <div className="flex bg-white w-full mb-5 shadow-sm rounded-lg">
        <div className="w-10/12 p-2">
          i am a search menu <input type="text" className="w-1/3" />
          :title: tag: dialect: (dropdown)
        </div>
        <div className="w-2/12">add new entry button</div>
      </div>
      <div>{wordsContent}</div>
    </div>
  );
}

export default Words;
