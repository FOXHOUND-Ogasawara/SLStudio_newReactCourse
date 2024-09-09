import { useCallback } from "react";
import "./App.css";

// ChildComponentのプロパティの型を定義
interface ChildComponentProps {
  onButtonClick: () => void;
}

const ChildComponent = ({ onButtonClick }: ChildComponentProps) => {
  return <button onClick={onButtonClick}>Click Me</button>;
};

function App() {
  // 元々の書き方
  // const handleClick = () => {
  //   alert("クリックされました");
  // };

  // useCallbackを使用して関数をメモ化
  const handleClick = useCallback(() => {
    alert("クリックされました");
  }, []);

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default App;
