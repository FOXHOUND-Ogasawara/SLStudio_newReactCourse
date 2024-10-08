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
import { BrowserRouter } from "react-router-dom";
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
  return (
    <Box>
      <Typography variant="h4">設問2</Typography>
      <Typography>
        ボタンを表示し、そのボタンを押した際に現在時刻が更新される仕組みを完成させなさい。
      </Typography>
    </Box>
  );
};

const Quesion3 = () => {
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
                <Button className="menu">設問1</Button>
                <Button className="menu">設問2</Button>
                <Button className="menu">設問3</Button>
              </ButtonGroup>
            </Stack>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, bgcolor: "background.default" }}
          >
            <Toolbar />
            <Quesion1 />
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
