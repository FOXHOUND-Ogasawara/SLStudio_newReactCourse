import "./App.css";

function App() {
  //Product型を定義
  type Product = {
    name: string;
    category: string;
    price: number;
  };

  const products: Array<Product> = [
    { name: "TV", category: "家電", price: 100000 },
    { name: "Play Station 5", category: "ゲーム", price: 50000 },
    { name: "ノートパソコン", category: "家電", price: 200000 },
    { name: "Nintendo Switch", category: "ゲーム", price: 30000 },
  ];

  // Person型を定義
  type Person = {
    name: string;
    city: string;
    birthday: string;
  };
  // 1人目のデータ
  const person1: Person = {
    name: "山田",
    city: "東京都",
    birthday: "2000年01月01日",
  };
  // 2人目のデータ
  const person2: Person = {
    name: "田中",
    city: "大阪府",
    birthday: "2002年02月02日",
  };

  // 配列に２人分のデータを保存
  const people: Array<Person> = [person1, person2];

  return (
    <>
      <h1>商品リスト</h1>
      <table>
        <thead>
          <th>商品名</th>
          <th>カテゴリー</th>
          <th>価格</th>
          <th>10万円以上？</th>
        </thead>
        <tbody>
          {products.map((product, index) => {
            if (product.price >= 100000) {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>YES</td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>NO</td>
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
