import "./App.css";

function App() {
  const hour: number = 12;
  const name: string = "Anna";

  let aisatsu: string = "";

  if (hour >= 4 && hour <= 11) {
    if (name == "SLスタジオ") {
      aisatsu = "おはよ！";
    } else if (name == "先輩") {
      aisatsu = "おはようございます";
    } else {
      aisatsu = "はじめまして";
    }
  } else if (hour >= 12 && hour <= 16) {
    aisatsu = "こんにちは";
  } else if ((hour >= 17 && hour <= 24) || (hour >= 0 && hour <= 3)) {
    aisatsu = "こんばんは";
  }

  return (
    <>
      <h1>
        {name}さん {aisatsu}
      </h1>
    </>
  );
}

export default App;
