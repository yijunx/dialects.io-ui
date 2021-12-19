import React from "react";
import WordSearchControl from "./WordSearchControl";
import { getDialects } from "../utils/WordUtils";

function SearchMenu({ currentWordQuery }) {
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

  let hasQuery = false;

  const dialects = getDialects();
  console.log(dialects);

  if (currentWordQuery.title) {
    titlePart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        title: {currentWordQuery.title}
      </div>
    );
    hasQuery = true;
  }
  if (currentWordQuery.tag) {
    tagPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        tag: {currentWordQuery.tag}
      </div>
    );
    hasQuery = true;
  }
  if (currentWordQuery.dialect) {
    dialectPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        dialect: {currentWordQuery.dialect}
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
        {titlePart} {tagPart} {dialectPart}
      </div>
    );
  } else {
    const nothingToSearch = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        nothing to search for now
      </div>
    );
    queryPart = (
      <div className="flex inline-block">
        <WordSearchControl
          currentWordQuery={currentWordQuery}
        ></WordSearchControl>
        {nothingToSearch}
      </div>
    );
  }

  return (
    <div className="flex justify-between items-center w-full">
      {queryPart}
      <div>add_button</div>
    </div>
  );
}

export default SearchMenu;
