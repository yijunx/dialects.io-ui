import React, { useState } from "react";

function SearchBox() {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  const wordSearchHandler = (e) => {};

  // use a AxiosGet to get the avaible dialects
  const [searchTerm, setSearchTerm] = useState({
    title: "",
    tag: "",
    dialect: "",
  });

  return (
    <div>
      i am a search box
      <form action=""></form>
    </div>
  );
}

export default SearchBox;
