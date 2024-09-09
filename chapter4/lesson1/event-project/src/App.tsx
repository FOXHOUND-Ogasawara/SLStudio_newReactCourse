import { useState } from "react";

import "./App.css";

function App() {
  const [clickCount, setClickCount] = useState(0);

  // クリックイベントのハンドラ
  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  // キーダウンイベントのハンドラ
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      alert("Enterキーが押されました");
    }
  };

  const [hoverText, setHoverText] = useState("ここにマウスを重ねてください");

  // マウスオーバーイベントのハンドラ
  const handleMouseOver = () => {
    setHoverText("マウスオーバー中!");
  };

  const handleMouseOut = () => {
    setHoverText("ここにマウスを重ねてください");
  };

  return (
    <>
      <h1>Reactイベントの例</h1>

      {/* クリックイベント */}
      <button onClick={handleClick}>
        ボタンをクリックしました: {clickCount} 回
      </button>
      <h1>キーボードイベントの例</h1>
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="ここに入力してください"
      />
      {/* マウスオーバーイベント */}
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        {hoverText}
      </div>
    </>
  );
}

export default App;
