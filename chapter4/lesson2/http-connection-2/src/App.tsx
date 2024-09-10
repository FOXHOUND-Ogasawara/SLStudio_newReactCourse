import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // JSX表示用変数(代入するのでlet)
  // let userList = [];
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // dataをuserListに代入
        setUserList(data);
        // 通信結果を確かめるためコンソールに出力
        console.log(data);
      })
      .catch((error) => console.error("エラーが発生しました。:", error));
  }, []);

  return (
    <>
      <h1>HTTP通信結果</h1>
      {userList.map((user) => {
        return <p>{user.name}</p>;
      })}
    </>
  );
}

export default App;
