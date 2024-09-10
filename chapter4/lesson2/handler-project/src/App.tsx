import { useCallback, useState } from "react";
import "./App.css";

// ChildComponentのプロパティの型を定義
interface ChildComponentProps {
  onButtonClick: () => void;
}

const ChildComponent = ({ onButtonClick }: ChildComponentProps) => {
  return <button onClick={onButtonClick}>Click Me</button>;
};

function App() {
  const [count, setCount] = useState(0);

  // useCallbackを使用して関数をメモ化
  const handleClick = useCallback(() => {
    setCount(count + 1);
    alert("クリックされました" + count + "回");
  }, [count]);

  // const handleClick = () => {
  //   alert("クリックされました");
  // };

  return (
    <div>
      <ChildComponent onButtonClick={handleClick} />
    </div>
  );
}

export default App;
