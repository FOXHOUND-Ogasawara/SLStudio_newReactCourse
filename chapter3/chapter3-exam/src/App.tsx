import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

const Quesion1 = () => {
  return (
    <Box>
      <Typography variant="h4">設問1</Typography>
      <Typography>
        上部の設問へのリンクを完成させなさい。
        <br />
        各リンク先のURLは任意とし、適切なモノを設定すること。
      </Typography>
    </Box>
  );
};

import { useState } from "react";

const Quesion2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  return (
    <Box>
      <Typography variant="h4">設問2</Typography>
      <Typography>
        ボタンを表示し、そのボタンを押した際に現在時刻が更新される仕組みを完成させなさい。
      </Typography>
      <Typography sx={{ mt: 2 }}>現在時刻: {currentTime}</Typography>
      <Button variant="contained" onClick={updateTime} sx={{ mt: 2 }}>
        時刻を更新
      </Button>
    </Box>
  );
};

import { useEffect } from "react";

const Quesion3 = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const filteredUsers = users.filter(user =>
          ["Antonette", "Maxime_Nienow"].includes(user.username)
        );
        console.log("取得したユーザー:", filteredUsers);
      } catch (error) {
        console.error("ユーザー情報の取得に失敗しました:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Box>
      <Typography variant="h4">設問3</Typography>
      <Typography>
        下記URLと通信を行い、ユーザーの情報を取得しコンソール内で確認できるようにしなさい。
        <br />
        取得するユーザーはユーザー名が「Antonette」と「Maxime_Nienow」の2名とする。
        <br />
        URL: https://jsonplaceholder.typicode.com/users
      </Typography>
    </Box>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" sx={{ boxShadow: `none` }}>
            <Toolbar>
              <Typography variant="h5">Chapter3試験</Typography>
            </Toolbar>
            <Stack
              direction="row"
              sx={{ width: "100%", justifyContent: "center", mt: 1 }}
            >
              <ButtonGroup variant="contained" sx={{ width: "100%" }}>
                <Button className="menu" href="/">設問1</Button>
                <Button className="menu" href="/question2">設問2</Button>
                <Button className="menu" href="/question3">設問3</Button>
              </ButtonGroup>
            </Stack>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Quesion1 />} />
              <Route path="/question2" element={<Quesion2 />} />
              <Route path="/question3" element={<Quesion3 />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
