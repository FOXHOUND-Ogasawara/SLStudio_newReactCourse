import "./App.css";
import React from 'react';

function App() {
  // 設問1
  // Bookオブジェクトの定義を行いなさい
  // 必要となるプロパティは以下とし、適切な型を設定すること
  // title, publisher, author, price, pageNumber, category

  // 設問2
  // Book型のデータを管理する配列を定義しなさい
  // データは出力結果の画像を参考とすること
  // 各書籍のカテゴリーについては以下とする
  // 初めてのプログラミング: 入門書、Reactを学ぶ絵本: 絵本
  // パソコンはどうやって動いているのか？: 参考書、PC攻略本【完全版】: 実用書

  const data = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' },
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
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
