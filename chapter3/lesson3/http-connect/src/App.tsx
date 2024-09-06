import "./App.css";

function App() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const users: string = data.map((user) => {
        console.log(user.name);
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
    </>
  );
}

export default App;
