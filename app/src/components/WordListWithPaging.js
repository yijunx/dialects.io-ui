import Word from "./Word";

function WordListWithPaging({ wordsWithPaging }) {
  // const [content, setContent] = useState(wordsWithPaging);
  // const [query, setQuery] = useState(wordQuery);
  return (
    <div className="">
      {wordsWithPaging.data.map((word) => (
        <Word word={word} key={word.id} />
      ))}
    </div>
  );
}

export default WordListWithPaging;
