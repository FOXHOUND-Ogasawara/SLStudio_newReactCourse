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
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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
      <Button variant="contained" onClick={updateTime}>現在時刻を更新</Button>
      <Typography>現在時刻: {currentTime}</Typography>
    </Box>
  );
};

const Quesion3 = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await response.json();
      const filteredUsers = users.filter(user =>
        user.username === "Antonette" || user.username === "Maxime_Nienow"
      );
      console.log(filteredUsers);
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
                <Button component={Link} to="/question1" className="menu">設問1</Button>
                <Button component={Link} to="/question2" className="menu">設問2</Button>
                <Button component={Link} to="/question3" className="menu">設問3</Button>
              </ButtonGroup>
            </Stack>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
          >
            <Toolbar />
            <Routes>
              <Route path="/question1" element={<Quesion1 />} />
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
