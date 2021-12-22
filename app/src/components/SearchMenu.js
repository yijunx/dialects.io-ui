import React from "react";
import WordSearchControl from "./WordSearchControl";
import WordCreateControl from "./WordCreateControl";

function SearchMenu({ currentWordQuery, user }) {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  // use a AxiosGet to get the avaible dialects
  // const [wordQuery, setWordQuery] = useState(currentWordQuery);

  let titlePart = "";
  let tagPart = "";
  let dialectPart = "";
  let queryPart = "";

  let currentSearch = "";

  let hasQuery = false;

  if (currentWordQuery.title) {
    titlePart = (
      <div className="m-1 text-gray-500 rounded-lg bg-red-100 max-w-max text-center px-2">
        {currentWordQuery.title}
      </div>
    );
    hasQuery = true;
  }
  if (currentWordQuery.tag) {
    tagPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-blue-100 max-w-max text-center px-2">
        {currentWordQuery.tag}
      </div>
    );
    hasQuery = true;
  }
  if (currentWordQuery.dialect) {
    dialectPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        {currentWordQuery.dialect}
      </div>
    );
    hasQuery = true;
  }

  if (hasQuery) {
    queryPart = (
      <div className="flex inline-block">
        <WordSearchControl
          currentWordQuery={currentWordQuery}
        ></WordSearchControl>
      </div>
    );
    currentSearch = (
      <div>
        {titlePart} {tagPart} {dialectPart}
      </div>
    );
  } else {
    currentSearch = (
      <div className="flex justify-between w-5/6">
        <div className="m-1 text-gray-400 rounded-lg bg-white max-w-max text-center px-2">
          {"<- 搜索"}
        </div>
        <div className="m-1 text-gray-400 rounded-lg bg-white max-w-max text-center px-2">
          {"创建 ->"}
        </div>
      </div>
    );
    queryPart = (
      <div className="flex inline-block">
        <WordSearchControl
          currentWordQuery={currentWordQuery}
        ></WordSearchControl>
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center w-full">
      {queryPart}
      {currentSearch}
      <WordCreateControl user={user}></WordCreateControl>
    </div>
  );
}

export default SearchMenu;
