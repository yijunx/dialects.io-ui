import React, { useState } from "react";

function WordListWithPaging({ wordsWithPaging, wordQuery }) {
  const [content, setContent] = useState(wordsWithPaging);
  const [query, setQuery] = useState(wordQuery);

  return <div>i googy goofer</div>;
}

export default WordListWithPaging;
