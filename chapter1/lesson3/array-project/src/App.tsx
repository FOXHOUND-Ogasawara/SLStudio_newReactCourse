import "./App.css";

function App() {
  const fruits: Array<string> = ["りんご", "バナナ", "オレンジ"];
  fruits.push("ぶどう");

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={index}>
              新しい配列の{index}番目に入っているのは{fruit}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
