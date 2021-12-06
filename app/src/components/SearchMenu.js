import React, { useState } from "react";

function SearchMenu({ title, tag, dialect }) {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  // use a AxiosGet to get the avaible dialects
  const [searchTerm, setSearchTerm] = useState({
    title: "",
    tag: "",
    dialect: "",
  });

  const wordSearchHandler = (e) => {};

  return (
    <div>
      i am a search menu :title: tag: dialect: (dropdown)
      <form action=""></form>
    </div>
  );
}

export default SearchMenu;
