import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Divider,
  ListItemButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { Assignment } from "@mui/icons-material";
import { GradientButton, OutlineButton, StyledPaper } from "./StyledComponents";
import { useState } from "react";

const drawerWidth = 240;

const Dashboard = () => (
  <>
    <h1>ダッシュボード</h1>
    <Typography>
      ダッシュボードのコンテンツです。ここには概要情報が表示されます。
    </Typography>
  </>
);

interface TextCopy {
  name?: string;
}

const TextCopyComponent = (props: TextCopy) => {
  const { name } = props;
  return (
    <Typography variant="h5" component="div">
      {name}
    </Typography>
  );
};

const Exam1 = () => {
  const [name, setName] = useState<string>();

  return (
    <>
      <h1>試験1</h1>
      <Typography>
        以下のテキストボックスに値入力すると同じ内容が出力される
        TextCopyComponentを完成させよ。
      </Typography>
      <Typography>
        TextCopyComponentに値を設定する場合はinterfaceかtypeで型を設定する事。
      </Typography>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      >
        <TextField
          label="名前"
          name="name"
          variant="outlined"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Box>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              この下に出力結果を出そう！
            </Typography>
            <TextCopyComponent name={name} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

const CounterComponent = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <StyledPaper>
        <Typography variant="h4" component="h2" gutterBottom>
          カウントアップ
        </Typography>
        <Typography variant="h1" component="p" color="primary" gutterBottom>
          {count}
        </Typography>
        <GradientButton
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          増やす
        </GradientButton>
        <OutlineButton variant="outlined" onClick={() => setCount(() => 0)}>
          リセット
        </OutlineButton>
        <GradientButton
          variant="contained"
          onClick={() => setCount((count) => count - 1)}
        >
          減らす
        </GradientButton>
      </StyledPaper>
    </>
  );
};

const Exam2 = () => {
  return (
    <>
      <h1>試験2</h1>
      <Typography>
        カウントアップ、カウントダウン、０にリセットする機能を実装せよ。
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

interface UserProfile {
  name: string;
  email: string;
}

const Exam3 = () => {
  const [Users, setUsers] = useState<UserProfile[]>([
    { name: "山田", email: "yamada@yamada.com" },
    { name: "鈴木", email: "suzuki@suzuki.com" },
  ]);

  const handleAddList = () => {
    const newUser: UserProfile = {
      name: "斎藤 輝幸",
      email: "saito@saito.com",
    };
    setUsers([...Users, newUser]);
  };
  return (
    <>
      <h1>試験3</h1>
      <Typography>
        「メンバーを追加」を押すと「斎藤
        輝幸」「saito@saito.com」が一覧に追加される処理を実装せよ。
        <br />
        ※ヒント :
        現在の表示はJSXにべた書きしているため、Users配列をループして出力しなくてはならない。
      </Typography>

      <GradientButton onClick={handleAddList}>メンバーを追加</GradientButton>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>メール</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Users.map((user, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

function App() {
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
            <Typography variant="h6" noWrap component="div">
              Lv1 試験
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
              <ListItemButton component={Link} to="/exam1">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="試験1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/exam2">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="試験2" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/exam3">
                <ListItemIcon>
                  <Assignment />
                </ListItemIcon>
                <ListItemText primary="試験3" />
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
            <Route path="/" element={<Dashboard />} />
            <Route path="/exam1" element={<Exam1 />} />
            <Route path="/exam2" element={<Exam2 />} />
            <Route path="/exam3" element={<Exam3 />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
