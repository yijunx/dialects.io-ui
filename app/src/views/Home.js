import "../App.css";
// import Product from "../components/Product";
// import products from "../data/products.json";

function Home() {
  return (
    <div className="md:w-1/2 mx-auto bg-green-50 p-4 rounded-lg text-gray-600">
      {/* <div className="">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div> */}
      <h3>这个网站还在建设中。</h3>
      <p>
        这是一个保存方言的网站，因为貌似好像没有一个网络服务试图保存各种方言里面独有的词条，
        甚至找不到一个https的，允许用户贡献的，web2.0时代的网站用于保存方言。
        于是这个网站就出现了。
      </p>
      <br />

      <ul>
        用户可以上传方言词条，每一个词条包含以下内容：
        <li>
          <b>释义</b>：解释这个词的意思
        </li>
        <li>
          <b>发音</b>
          ：这个词在方言中怎么读（请用先用各种注音表示，上传语音之后会开发）
        </li>
        <li>
          <b>用法</b>：用一些句子在体现这个词怎么用
        </li>
        <li>
          <b>普通话中对应的词</b>：以便其他用户搜索（xx在xx话里怎么说）
        </li>
      </ul>
      <br />
      <p>
        对于已经产生的词条的各个内容，用户都可以提交新的版本。用户可以给觉得最恰当的版本投票。
        默认显示的版本会是投票最多的版本。
        如果提交新的版本太麻烦，用户也可以对内容提出建议，等待原内容提交者采纳并且修改。
      </p>
    </div>
  );
}

export default Home;
