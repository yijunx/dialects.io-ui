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

  if (currentWordQuery.title) {
    titlePart = <div></div>;
  }

  return (
    <div>
      <p>search function under construction</p>
    </div>
  );
}

export default SearchMenu;
