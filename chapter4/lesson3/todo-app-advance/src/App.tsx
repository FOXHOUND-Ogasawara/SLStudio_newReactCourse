import { useMemo, useState } from "react";
import "./App.css";

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");
  // フィルタ結果を保存するtodoリスト(表示用）
  // 廃止
  //const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const handleChangeText = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = () => {
    if (inputText != "") {
      const newTodo: Todo = { text: inputText, completed: false };
      setTodos([...todos, newTodo]);
      setInputText("");
    }
  };

  const toggleTodo = (index: number) => {
    todos[index].completed = !todos[index].completed;
    setTodos([...todos]);
  };

  // fiteredTodosはuseStateではなく通常の変数として定義
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) => {
      if (filter === "complete") {
        return todo.completed;
      } else if (filter === "incomplete") {
        return !todo.completed;
      } else {
        return true;
      }
    });
  }, [filter, todos]);

  return (
    <>
      <div className="app-container">
        <h1>シンプルTodoアプリ</h1>
        <div>
          <input
            type="text"
            placeholder="新しいタスクを入力"
            className="todo-input"
            value={inputText}
            onChange={handleChangeText}
          />
          <button className="add-button" onClick={handleClick}>
            追加
          </button>
        </div>
      </div>
      <div>
        {/* onClickではfilter変数にallかincomplete,completeのどれかを設定 */}
        <button onClick={() => setFilter("all")} className="filter-button">
          すべて
        </button>
        <button
          onClick={() => setFilter("incomplete")}
          className="filter-button"
        >
          未完了
        </button>
        <button onClick={() => setFilter("complete")} className="filter-button">
          完了
        </button>
      </div>

      <ul className="todo-list">
        {/* filteredTodosという名前は変わっていないが、以前の定義は廃止している */}
        {filteredTodos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span
              className={todo.completed ? "completed" : ""}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
