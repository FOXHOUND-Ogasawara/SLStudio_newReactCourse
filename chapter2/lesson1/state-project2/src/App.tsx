import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("おはようございます");
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleGreeting = () => {
    setGreeting(inputText);
  };

  return (
    <>
      <h1>{greeting}</h1>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="なにか入力して下さい"
        />
      </div>
      <button onClick={handleGreeting}>挨拶を変更する</button>
    </>
  );
}

export default App;
