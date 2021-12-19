import React, { useState } from "react";
import { useAxiosGet } from "../utils/HttpRequest";

function Menu({ dialects, currentWordQuery }) {
  const [wordQuery, setWordQuery] = useState(currentWordQuery);
  console.log(dialects);
  return (
    <form>
      <div className="form-inner">
        <div className="form-group">
          <label htmlFor="title" className="">
            guan jian ci
          </label>
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
          <label htmlFor="tag" className="">
            tag
          </label>
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
          <label htmlFor="dialect" className="">
            fang yan
          </label>
          <select
            name="dialect"
            id="dialect"
            onChange={(e) =>
              setWordQuery({ ...wordQuery, dialect: e.target.value })
            }
          >
            {dialects.map((d) => (
              <option value={d.name} key={d.id}>
                {d.name}
              </option>
            ))}
          </select>
          {/* <input
            type="text"
            name="dialect"
            id="dialect"
            onChange={(e) =>
              setWordQuery({ ...wordQuery, dialect: e.target.value })
            }
            value={wordQuery.dialect || ""}
            className="border w-full p-1 text-sm rounded h-7"
          /> */}
        </div>
      </div>
    </form>
  );
}

function WordSearchMenu({ currentWordQuery }) {
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
      ></Menu>
    );
  }

  return <div>{formContent}</div>;
}

export default WordSearchMenu;
