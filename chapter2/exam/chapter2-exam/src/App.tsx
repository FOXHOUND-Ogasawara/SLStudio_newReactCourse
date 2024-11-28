import { Assignment } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  HorizontalLine,
  OutlineButton,
  StyledPaper,
} from "./components/StyledComponents";

const drawerWidth = 240;

const Question1 = () => (
  <>
    <h1>設問1</h1>
    <Typography>
      左のメニューバーを完成させなさい。
      <br />
      各設問をクリックすることで対応したページが表示されるように修正すること。
    </Typography>
    <Typography>
      URLは以下のように設定してください。
      <br />
      設問1: /<br />
      設問2: /q2
      <br />
      設問3: /q3
      <br />
    </Typography>
  </>
);

const Question2 = () => {
  const [names, setNames] = useState<string[]>([]);
  const [name, setName] = useState("");

  const addName = () => {
    if (name) {
      setNames([...names, name]);
      setName(""); // 入力欄をリセット
    }
  };

  return (
    <>
      <h1>設問2</h1>
      <Typography>
        名前が追加される仕組みを作成しなさい。
        <br />
        ※レイアウトに関しての指定はありません、自由に書いてみましょう※
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "20ch" } }}
      >
        <TextField
          label="名前"
          name="name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Button variant="contained" sx={{ m: 1 }} onClick={addName}>
        追加
      </Button>
      <HorizontalLine />
      <ul>
        {names.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </>
  );
};

const CounterComponent = () => {
  const [num, setNum] = useState<number>(0);

  const handleClickNumber = (key: number) => {
    setNum(key);
  };

  return (
    <>
      <StyledPaper>
        <Typography variant="h1" component="p" color="primary" gutterBottom>
          {num}
        </Typography>
        <Box>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(1)}
          >
            1
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(2)}
          >
            2
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(3)}
          >
            3
          </OutlineButton>
        </Box>
        <Box>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(4)}
          >
            4
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(5)}
          >
            5
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(6)}
          >
            6
          </OutlineButton>
        </Box>
        <Box>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(7)}
          >
            7
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(8)}
          >
            8
          </OutlineButton>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(9)}
          >
            9
          </OutlineButton>
        </Box>
        <Box>
          <OutlineButton
            variant="outlined"
            onClick={() => handleClickNumber(0)}
          >
            0
          </OutlineButton>
        </Box>
      </StyledPaper>
    </>
  );
};

const Question3 = () => {
  return (
    <>
      <h1>設問3</h1>
      <Typography>
        押されたボタンに応じて表示される数字が変動する機能を実装せよ。
        <br />
        初期値は0とする。
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      >
        <CounterComponent />
      </Box>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Lv1 スキルチェック
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="設問1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/q2">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="設問2" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/q3">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="設問3" />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Question1 />} />
            <Route path="/q2" element={<Question2 />} />
            <Route path="/q3" element={<Question3 />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
