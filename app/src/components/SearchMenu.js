import React, { useState } from "react";

function SearchMenu({ currentWordQuery }) {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  // use a AxiosGet to get the avaible dialects
  const [wordQuery, setWordQuery] = useState(currentWordQuery);

  let titlePart = "";
  let tagPart = "";
  let dialectPart = "";
  let queryPart = "";

  let hasQuery = false;

  if (wordQuery.title) {
    titlePart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        title: {wordQuery.title}
      </div>
    );
    hasQuery = true;
  }
  console.log(wordQuery);
  if (wordQuery.tag) {
    tagPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        tag: {wordQuery.tag}
      </div>
    );
    hasQuery = true;
  }
  if (wordQuery.dialect) {
    dialectPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        dialect: {wordQuery.dialect}
      </div>
    );
    hasQuery = true;
  }

  if (hasQuery) {
    queryPart = (
      <div className="flex inline-block">
        search_button {titlePart} {tagPart} {dialectPart}
      </div>
    );
  } else {
    const nothingToSearch = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        nothing to search
      </div>
    );
    queryPart = (
      <div className="flex inline-block">search_button {nothingToSearch}</div>
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
