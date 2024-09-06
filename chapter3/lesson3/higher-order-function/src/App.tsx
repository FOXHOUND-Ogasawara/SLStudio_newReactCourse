import "./App.css";

function App() {
  // 学生の点数リスト
  const scores: number[] = [85, 62, 93, 47, 75, 89, 54, 71, 98, 60];
  const passingScores: number[] = scores.filter((score) => {
    return score >= 70;
  });
  const total: number = scores.reduce((acc, current) => {
    return acc + current;
  });

  const characters: string[] = ["H", "e", "l", "l", "o"];
  const word = characters.reduce((accValue, currentValue) => {
    return accValue + currentValue;
  });
  return (
    <>
      <section>
        <h1>・filter,mapの利用例</h1>
        <h1>全ての点数</h1>【
        {scores.map((score) => (
          <span>{score}点 </span>
        ))}
        】<h1>70点以上の合格者</h1>【
        {passingScores.map((score) => (
          <span>{score}点 </span>
        ))}
        】<h1>合格者数 / 受験者数</h1>
        {
          <span>
            {passingScores.length}人 / {scores.length}人
          </span>
        }
      </section>
      <section>
        <h1>・reduceの利用例</h1>
        <h1>合計得点</h1>
        <p>{total}点</p>
        <h1>文字連結</h1>
        <p>{word}</p>
      </section>
    </>
  );
}

export default App;
