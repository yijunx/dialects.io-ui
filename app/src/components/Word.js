function Word({ word: { title, explanation, pronunciation, usage, dialect } }) {
  return (
    <div className="bg-white w-full mb-2 shadow-sm rounded-lg p-1">
      <div className="flex">
        <h1 className="text-xl m-1">{title.substr(0, 50)}</h1>
        <h3 className="text-gray-400 mt-2">{pronunciation}</h3>
      </div>
      <div className="m-1 text-gray-500 rounded-lg bg-green-100 max-w-max text-center px-2">
        {dialect.substr(0, 100)}
      </div>
      <div className="m-1">意思：{explanation.substr(0, 100)}</div>
      {usage ? <div className="m-1">用法：{usage.substr(0, 100)}</div> : ""}
    </div>
  );
}

export default Word;
