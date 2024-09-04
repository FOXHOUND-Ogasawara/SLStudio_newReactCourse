import { useState } from "react";
import "./App.css";

function App() {
  interface Todo {
    text: string;
    completed: boolean;
  }
  const [todoList, setTodoList] = useState<Array<Todo>>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText != "") {
      const newTodo: Todo = { text: inputText, completed: false };
      setTodoList([...todoList, newTodo]);
      setInputText("");
    }
  };

  const toggleTodo = (index: number) => {
    todoList[index].completed = !todoList[index].completed;
    setTodoList([...todoList]);
  };

  return (
    <>
      <div className="app-container">
        <h1>シンプルTodoアプリ</h1>
        <div>
          <input
            type="text"
            value={inputText}
            placeholder="新しいタスクを入力"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="add-button" onClick={handleClick}>
            追加
          </button>
        </div>
      </div>

      <ul className="todo-list">
        {todoList.map((todo, index) => {
          if (todo.completed) {
            return (
              <li key={index} className="todo-item">
                <span className="completed" onClick={() => toggleTodo(index)}>
                  {todo.text}
                </span>
              </li>
            );
          } else {
            return (
              <li key={index} className="todo-item">
                <span onClick={() => toggleTodo(index)}>{todo.text}</span>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}

export default App;
