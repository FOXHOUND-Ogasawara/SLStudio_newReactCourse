import "./App.css";

function App() {
  // 設問1
  // Bookオブジェクトの定義を行いなさい
  // 必要となるプロパティは以下とし、適切な型を設定すること
  // title, publisher, author, price, pageNumber, category
  type Book = {
    title: string;
    publisher: string;
    author: string;
    price: number;
    pageNumber: number;
    category: string;
  };

  // 設問2
  // Book型のデータを管理する配列を定義しなさい
  // データは出力結果の画像を参考とすること
  // 各書籍のカテゴリーについては以下とする
  // 初めてのプログラミング: 入門書、Reactを学ぶ絵本: 絵本
  // 参考書: パソコンはどうやって動いているのか？: 参考書、PC攻略本【完全版】: 実用書
  const Books: Book[] = [
    {
      title: "はじめてのプログラミング",
      publisher: "プログレス出版",
      author: "田中 一郎",
      price: 1800,
      pageNumber: 220,
      category: "入門書",
    },
    {
      title: "Reactを学ぶ絵本1",
      publisher: "ひらがな書房",
      author: "鈴木 花子",
      price: 1200,
      pageNumber: 48,
      category: "絵本",
    },
    {
      title: "Reactを学ぶ絵本2",
      publisher: "ひらがな書房",
      author: "鈴木 花子",
      price: 1200,
      pageNumber: 52,
      category: "絵本",
    },
    {
      title: "パソコンはどうやって動いているのか？",
      publisher: "テクノロジー文庫",
      author: "山田 太郎",
      price: 2000,
      pageNumber: 180,
      category: "参考書",
    },
    {
      title: "PC攻略本【完全】",
      publisher: "オールインワン出版",
      author: "高橋 直樹",
      price: 3500,
      pageNumber: 350,
      category: "実用書",
    },
  ];

  // 設問3
  // 書籍の配列を利用して画面表示を行いなさい
  // 出力結果は下部の画像を参考とすること
  // オススメ欄は、カテゴリが「入門書」か「参考書」の場合に「◎」が付くようにしなさい
  return (
    <>
      <h1>商品一覧</h1>
      <table>
        <thead>
          <th>No</th>
          <th>書籍名</th>
          <th>出版社</th>
          <th>著者</th>
          <th>価格</th>
          <th>ページ数</th>
          <th>オススメ</th>
        </thead>
        <tbody>
          {Books.map((book, index) => {
            if (book.category === "入門書" || book.category === "参考書") {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.publisher}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.pageNumber}</td>
                  <td>◎</td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.publisher}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>{book.pageNumber}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
