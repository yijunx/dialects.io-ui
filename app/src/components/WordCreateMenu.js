import React, { useState } from "react";
import { useAxiosGet } from "../utils/HttpRequest";
import { Link } from "react-router-dom";

function Menu({ dialects, closeMenu }) {
  const [wordCreate, setWordCreate] = useState({
    title: null,
    tags: null,
    explanation: null,
    usage: null,
    pronunciation: null,
    dialect: null,
  });

  const [backendMessage, setBackendMessage] = useState({
    success: false,
    message: "",
  });

  const wordCreateHandler = (e) => {
    e.preventDefault();
    console.log("things to post over!!!");
    console.log(wordCreate);
    // login(details, setBackendMessage);
  };

  return (
    <div>
      <form onSubmit={wordCreateHandler}>
        <div className="form-inner">
          <div className="form-group">
            <label htmlFor="title" className="text-gray-500 text-sm">
              标题
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) =>
                  setWordCreate({ ...wordCreate, title: e.target.value })
                }
                value={wordCreate.title || ""}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </label>

            <label htmlFor="tags" className="text-gray-500 text-sm">
              标签(这个方言普通话里的相关词，以便搜索)，请用逗号隔开多个标签
              <input
                type="text"
                name="tags"
                id="tags"
                onChange={(e) =>
                  setWordCreate({ ...wordCreate, tags: e.target.value })
                }
                value={wordCreate.tags || ""}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </label>

            <label htmlFor="dialect" className="text-gray-500 text-sm">
              方言
              <select
                name="dialect"
                id="dialect"
                onChange={(e) =>
                  setWordCreate({ ...wordCreate, dialect: e.target.value })
                }
                className="border w-full p-1 text-sm rounded h-7"
                value={wordCreate.dialect || ""}
              >
                {dialects.map((d) => (
                  <option value={d.name} key={d.id}>
                    {d.name}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="explanation" className="text-gray-500 text-sm">
              解释
              <input
                type="text"
                name="explanation"
                id="explanation"
                onChange={(e) =>
                  setWordCreate({
                    ...wordCreate,
                    explanation: e.target.value,
                  })
                }
                value={wordCreate.explanation || ""}
                className="border w-full p-1 text-sm rounded h-14"
              />
            </label>

            <label htmlFor="pronunciation" className="text-gray-500 text-sm">
              发音(可以用ping1yin1)
              <input
                type="text"
                name="pronunciation"
                id="pronunciation"
                onChange={(e) =>
                  setWordCreate({
                    ...wordCreate,
                    pronunciation: e.target.value,
                  })
                }
                value={wordCreate.pronunciation || ""}
                className="border w-full p-1 text-sm rounded h-7"
              />
            </label>

            <label htmlFor="usage" className="text-gray-500 text-sm">
              用法
              <input
                type="text"
                name="usage"
                id="usage"
                onChange={(e) =>
                  setWordCreate({
                    ...wordCreate,
                    usage: e.target.value,
                  })
                }
                value={wordCreate.usage || ""}
                className="border w-full p-1 text-sm rounded h-14"
              />
            </label>
          </div>
        </div>
        <div className="text-gray-500 text-sm">{backendMessage.message}</div>
        <input
          type="submit"
          value="创建"
          className="text-gray-500 text-sm p-1 rounded w-full bg-gray-100 mt-3"
        />
      </form>
      <div></div>
    </div>
  );
}

function WordCreateMenu({ closeMenu, user }) {
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
    formContent = (
      <Menu dialects={dialectsGet.data.response} closeMenu={closeMenu}></Menu>
    );
  }

  return (
    <div className="border-1 bg-white w-full shadow-sm rounded-md p-2 mb-2">
      {formContent}
    </div>
  );
}

export default WordCreateMenu;
