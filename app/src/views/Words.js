import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useAxiosGet } from "../utils/HttpRequest";
import { UserContext } from "../UserContext";
import SearchMenu from "../components/SearchMenu";
import WordListWithPaging from "../components/WordListWithPaging";

// need to use  params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getQueryString(wordQuery) {
  let queryString = `?page=${wordQuery.page}&size=${wordQuery.size}`;

  if (wordQuery.title) {
    queryString = queryString + `&title=${wordQuery.title}`;
  }

  if (wordQuery.tag) {
    queryString = queryString + `&tag=${wordQuery.tag}`;
  }

  if (wordQuery.dialect) {
    queryString = queryString + `&dialect=${wordQuery.dialect}`;
  }

  return queryString;
}

function Words() {
  let query = useQuery();
  // figure out the url string
  const currentWordQuery = {
    title: query.get("title"),
    tag: query.get("tag"),
    dialect: query.get("dialect"),
    page: query.get("page") || 1,
    size: query.get("size") || 2,
  };

  let wordsContent = null;

  const url = `${
    process.env.REACT_APP_API_BASE_URL
  }/public/words${getQueryString(currentWordQuery)}`;

  let wordsPublicGet = useAxiosGet(url);

  if (wordsPublicGet.loading) {
    wordsContent = <p>Loading...</p>;
  }

  if (wordsPublicGet.error) {
    wordsContent = <p>Error getting data with error</p>;
  }

  if (wordsPublicGet.data) {
    // wordsContent = JSON.stringify(wordsPublicGet.data.response);
    wordsContent = (
      <WordListWithPaging
        wordsWithPaging={wordsPublicGet.data.response}
        currentWordQuery={currentWordQuery}
      ></WordListWithPaging>
    );
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
        <SearchMenu currentWordQuery={currentWordQuery}></SearchMenu>
      </div>
      <div>{wordsContent}</div>
    </div>
  );
}

export default Words;
