import React from "react";
import Word from "./Word";
import Pagination from "./Pagination";

function WordListWithPaging({ wordsWithPaging, currentWordQuery }) {
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
