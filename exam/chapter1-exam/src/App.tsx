import { Assignment } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { GradientButton, OutlineButton, StyledPaper } from "./StyledComponents";

const drawerWidth = 240;

const Dashboard = () => (
  <>
    <h1>ダッシュボード</h1>
    <Typography>
      ダッシュボードのコンテンツです。ここには概要情報が表示されます。
    </Typography>
  </>
);

const TextCopyComponent = ({ text }) => {
  return (
    <Typography variant="h5" component="div">
      <h2>{text}</h2>
    </Typography>
  );
};

const Exam1 = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

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
          onChange={handleChange}
          value={inputText}
          label="名前"
          name="name"
          variant="outlined"
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
            <TextCopyComponent text={inputText} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

const CounterComponent = () => {
  const [inputNum, setInputNum] = useState(0);

  const handleClickPuls = () => {
    setInputNum(inputNum + 1);
  };

  const handleClickMinus = () => {
    setInputNum(inputNum - 1);
  };

  const handleClickReset = () => {
    setInputNum(0);
  };
  return (
    <>
      <StyledPaper>
        <Typography variant="h4" component="h2" gutterBottom>
          カウントアップ
        </Typography>
        <Typography variant="h1" component="p" color="primary" gutterBottom>
          {inputNum}
        </Typography>
        <GradientButton onClick={handleClickPuls} variant="contained">
          増やす
        </GradientButton>
        <OutlineButton onClick={handleClickReset} variant="outlined">
          リセット
        </OutlineButton>
        <GradientButton onClick={handleClickMinus} variant="contained">
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

const Exam3 = () => {
  const profile1: Array<string> = ["山田", "yamada@yamada.com"];
  const profile2: Array<string> = ["鈴木", "suzuki@suzuki.com"];
  const [profile3, setProfile3] = useState<string[]>([]);

  const handleClick = () => {
    setProfile3([...profile3, "斎藤 輝幸", "saito@saito.com"]);
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

      <GradientButton onClick={handleClick}>メンバーを追加</GradientButton>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell>メール</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1">
              {profile1.map((profile, index) => {
                return <TableCell key={index}>{profile}</TableCell>;
              })}
            </TableRow>
            <TableRow key="2">
              {profile2.map((profile, index) => {
                return <TableCell key={index}>{profile}</TableCell>;
              })}
            </TableRow>
            <TableRow key="3">
              {profile3.map((profile, index) => {
                return <TableCell key={index}>{profile}</TableCell>;
              })}
            </TableRow>
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
