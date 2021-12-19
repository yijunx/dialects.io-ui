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

  if (wordQuery.title) {
    titlePart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        title: {wordQuery.title}
      </div>
    );
  }
  console.log(wordQuery);
  if (wordQuery.tag) {
    tagPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        tag: {wordQuery.tag}
      </div>
    );
  }
  if (wordQuery.dialect) {
    dialectPart = (
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        dialect: {wordQuery.dialect}
      </div>
    );
  }

  return (
    <div className="flex">
      {titlePart} {tagPart} {dialectPart}
    </div>
  );
}

export default SearchMenu;
