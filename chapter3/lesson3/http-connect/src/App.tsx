import "./App.css";

function App() {
  let users: string[];
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((user) => {
        console.log(user.name);
        users.push(user);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));

  return (
    <>
      <h1>
        fetchを使った
        <br />
        HTTP通信の学習
      </h1>
      <ul>
        {users.map((user) => {
          return <li>{user}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
