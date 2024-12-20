import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <>
      <Box sx={{ borderBottom: 1, marginBottom: 3 }}>
        <Typography variant="h5">設問1</Typography>
        <Typography>
          サイドメニューにあるToDoリストを完成させなさい。
          <br />
          表示する情報は、以下のURLから取得できる。
          <br />
          https://jsonplaceholder.typicode.com/todos
        </Typography>
      </Box>
      <Box sx={{ borderBottom: 1, marginBottom: 3 }}>
        <Typography variant="h5">設問2</Typography>
        <Typography>
          Todoリストに絞り込み機能を追加しなさい。
          <br />
          絞り込み条件は「すべて」「完了」「未完了」の3種類とする。
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">設問3</Typography>
        <Typography>
          サイドメニューにある計算機能を完成させなさい。
          <br />
          入力値に応じた計算が行われ、画面で確認できることとする。
        </Typography>
      </Box>
    </>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <>
      <Box>
        <TextField
          select
          label="絞り込み"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          sx={{ mb: 2 }}
        >
          <MenuItem value="all">すべて</MenuItem>
          <MenuItem value="completed">完了</MenuItem>
          <MenuItem value="incomplete">未完了</MenuItem>
        </TextField>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>ユーザーID</TableCell>
            <TableCell>タスク名</TableCell>
            <TableCell>状況</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredTodos.map(todo => (
            <TableRow key={todo.id}>
              <TableCell>{todo.id}</TableCell>
              <TableCell>{todo.userId}</TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed ? "完了" : "未完了"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const Calculator = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(0);

  const calculate = () => {
    let res = 0;
    if (operator === "+") res = value1 + value2;
    if (operator === "-") res = value1 - value2;
    setResult(res);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        計算機能
      </Typography>
      <Typography variant="h5" component="p">
        {result}
      </Typography>
      <Toolbar />
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "10ch" } }}
      >
        <TextField
          label="value1"
          color="secondary"
          type="number"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
        />
        <TextField
          select
          label="Select"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <MenuItem value="+">+</MenuItem>
          <MenuItem value="-">-</MenuItem>
        </TextField>
        <TextField
          label="value2"
          color="secondary"
          type="number"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
        />
      </Box>
      <Button variant="contained" sx={{ m: 2 }} onClick={calculate}>
        計算を実行する
      </Button>
    </>
  );
};

const MenuList = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => toggleDrawer(false)}
        classes={{ paper: "drawer-paper" }}
      >
        <Box className="drawer-header">
          <Typography variant="h6" className="drawer-title">
            機能一覧
          </Typography>
        </Box>
        <List>
          <ListItem>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="ホーム" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/todos">
              <ListItemText primary="ToDoリスト" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={Link} to="/calculator">
              <ListItemText primary="計算機" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>
              <MenuList />
              <Typography variant="h5">Chapter4試験</Typography>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todos" element={<TodoList />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
