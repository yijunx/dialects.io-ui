import React, { useState } from "react";
import { useAxiosGet } from "../utils/HttpRequest";
import { Link } from "react-router-dom";

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

function Menu({ dialects, currentWordQuery, closeMenu }) {
  const [wordQuery, setWordQuery] = useState(currentWordQuery);

  return (
    <div>
      <form>
        <div className="form-inner">
          <div className="form-group">
            <label htmlFor="title" className="text-gray-500 text-sm">
              关键词（此条标题含有）
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) =>
                  setWordQuery({ ...wordQuery, title: e.target.value })
                }
                value={wordQuery.title || ""}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </label>

            <label htmlFor="tag" className="text-gray-500 text-sm">
              标签（等于词条标签之一）
              <input
                type="text"
                name="tag"
                id="tag"
                onChange={(e) =>
                  setWordQuery({ ...wordQuery, tag: e.target.value })
                }
                value={wordQuery.tag || ""}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </label>

            <label htmlFor="dialect" className="text-gray-500 text-sm">
              方言
              <select
                name="dialect"
                id="dialect"
                onChange={(e) =>
                  setWordQuery({ ...wordQuery, dialect: e.target.value })
                }
                className="border w-full p-1 text-sm rounded h-7"
                value={wordQuery.dialect || ""}
              >
                {dialects.map((d) => (
                  <option value={d.name} key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </form>
      <div>
        <Link
          to={"/words" + getQueryString(wordQuery)}
          className="text-gray-500 mt-2 p-1 block text-sm text-center bg-gray-100 rounded"
          onClick={closeMenu}
        >
          搜索
        </Link>
      </div>
    </div>
  );
}

function WordSearchMenu({ currentWordQuery, closeMenu }) {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  // use a AxiosGet to get the avaible dialects

  // get the available dialects from backend
  // diallects is an array

  let formContent = null;
  // api/public/words_frontend_utils/dialects
  const url = `${process.env.REACT_APP_API_BASE_URL}/public/words_frontend_utils/dialects`;

  let dialectsGet = useAxiosGet(url);

  if (dialectsGet.loading) {
    formContent = <p>Loading...</p>;
  }

  if (dialectsGet.error) {
    formContent = <p>Error getting data with error</p>;
  }

  if (dialectsGet.data) {
    // wordsContent = JSON.stringify(wordsPublicGet.data.response);
    formContent = (
      <Menu
        dialects={dialectsGet.data.response}
        currentWordQuery={currentWordQuery}
        closeMenu={closeMenu}
      ></Menu>
    );
  }

  return (
    <div className="border-1 bg-white w-full shadow-sm rounded-md p-2 mb-2">
      {formContent}
    </div>
  );
}

export default WordSearchMenu;
