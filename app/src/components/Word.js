function Word({ word: { title, explanation, pronunciation, usage } }) {
  return (
    <div className="bg-white w-full mb-2 shadow-sm rounded-lg">
      <h1 className="text-xl m-1">{title.substr(0, 50)}</h1>
      <h3 className="text-gray-400 m-1">发音：{pronunciation}</h3>
      <div className="m-1">意思：{explanation.substr(0, 100)}</div>
      <div className="m-1">用法：{usage.substr(0, 100)}</div>
    </div>
  );
}

export default Word;
