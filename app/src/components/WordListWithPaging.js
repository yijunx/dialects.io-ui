import React from "react";
import Word from "./Word";
import Pagination from "./Pagination";

function WordListWithPaging({ wordsWithPaging, currentWordQuery }) {
  // const [content, setContent] = useState(wordsWithPaging);
  // const [query, setQuery] = useState(wordQuery);
  const paging = JSON.stringify(wordsWithPaging.paging);

  // need to add next / previous page here
  // just render the address bar...

  return (
    <div className="">
      <div>
        <Pagination
          paging={wordsWithPaging.paging}
          query={currentWordQuery}
        ></Pagination>
      </div>
      {wordsWithPaging.data.map((word) => (
        <Word word={word} key={word.id} />
      ))}
    </div>
  );
}

export default WordListWithPaging;
