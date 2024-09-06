import "./App.css";

function App() {
  // 日付を扱う準備。Date型の変数を用意する
  const date: Date = new Date();
  // 年を取得
  const year: number = date.getFullYear();
  // 月を取得
  const month: number = date.getMonth();
  // 日付を取得
  const day: number = date.getDate();
  // 時間を取得
  const hour: number = date.getHours();
  // 分を取得
  const minutes: number = date.getMinutes();
  // 秒を取得
  const second: number = date.getSeconds();

  const hour1: number = 12;
  const aisatsu: string = hour1 <= 11 ? "おはよう" : "こんにちは";
  const isEditable: boolean = true;
  const userName: string = "山田太郎";
  const yellowText: boolean = true;

  return (
    <>
      <div>
        <h1>Dateの使用例</h1>
      </div>
      <div>
        <h1>年</h1>
        <h2>{year}</h2>

        <h1>月</h1>
        <h2>{month + 1}</h2>

        <h1>日</h1>
        <h2>{day}</h2>

        <h1>時間:分:秒</h1>
        <h2>
          {hour} : {minutes} : {second}
        </h2>
      </div>
      <div>
        <h1>三項演算の使用例</h1>
        <div>{aisatsu}</div>
        <div className={yellowText ? "text-yellow" : ""}>お名前：</div>
        {isEditable ? (
          <input type="text" placeholder={userName} />
        ) : (
          <p>{userName}</p>
        )}
      </div>
    </>
  );
}

export default App;
