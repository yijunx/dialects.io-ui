import Word from "./Word";

function WordListWithPaging({ wordsWithPaging }) {
  // const [content, setContent] = useState(wordsWithPaging);
  // const [query, setQuery] = useState(wordQuery);
  const paging = JSON.stringify(wordsWithPaging.paging);
  return (
    <div className="">
      {wordsWithPaging.data.map((word) => (
        <Word word={word} key={word.id} />
      ))}
      <div>{paging}</div>
    </div>
  );
}

export default WordListWithPaging;
