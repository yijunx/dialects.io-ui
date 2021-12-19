import Word from "./Word";

function getQueryString(wordQuery) {
  let queryString = `?page=1&size=5`;

  if (wordQuery.title) {
    queryString = queryString + `&title=${wordQuery.title}`;
  }

  if (wordQuery.tag) {
    queryString = queryString + `&tag=${wordQuery.tag}`;
  }

  if (wordQuery.dialect) {
    queryString = queryString + `&dialect=${wordQuery.dialect}`;
  }

  return queryString;
}

function WordListWithPaging({ wordsWithPaging }) {
  // const [content, setContent] = useState(wordsWithPaging);
  // const [query, setQuery] = useState(wordQuery);
  const paging = JSON.stringify(wordsWithPaging.paging);
  // need to add next / previous page here
  // just render the address bar...
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
