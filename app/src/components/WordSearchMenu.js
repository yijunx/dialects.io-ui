import React, { useState } from "react";

function WordSearchMenu({ currentWordQuery }) {
  // class WordQuery(QueryPagination):
  // tag: Optional[str]
  // title: Optional[str]
  // dialect: Optional[DialectEnum]

  // use a AxiosGet to get the avaible dialects
  const [wordQuery, setWordQuery] = useState(currentWordQuery);

  return (
    <div>
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
              value={wordQuery.title}
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
              value={wordQuery.tag}
              className="border w-full p-1 text-sm rounded h-7"
            />
            <label htmlFor="dialect" className="">
              fang yan
            </label>
            <input
              type="text"
              name="dialect"
              id="dialect"
              onChange={(e) =>
                setWordQuery({ ...wordQuery, dialect: e.target.value })
              }
              value={wordQuery.dialect}
              className="border w-full p-1 text-sm rounded h-7"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default WordSearchMenu;
