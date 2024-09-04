import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Snackbar,
  Stack,
  TextField,
  Typography,
  Alert,
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

function App() {
  // List用
  const items = [
    { id: 1, name: "タスク1", description: "タスク1の詳細説明" },
    { id: 2, name: "タスク2", description: "タスク2の詳細説明" },
    { id: 3, name: "タスク3", description: "タスク3の詳細説明" },
  ];
  //Dialog用
  const [openDialog, setOpenDialog] = useState(false);

  // Dialog用
  const handleDialogOpen = () => {
    setOpenDialog(true);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Stack spacing={2} direction="row">
          <Paper
            elevation={3}
            sx={{ padding: 2, backgroundColor: "lightblue" }}
          >
            <Typography variant="h5">Paperコンポーネントの例</Typography>
            <Typography>
              このPaperはエレベーション3とカスタム背景色を持っています。
            </Typography>
          </Paper>
          <Paper
            elevation={24}
            sx={{ padding: 2, backgroundColor: "lightpink" }}
          >
            <Typography variant="h5">Paperコンポーネントの例</Typography>
            <Typography>
              このPaperはエレベーション24とカスタム背景色を持っています。
            </Typography>
          </Paper>
        </Stack>
      </Container>

      <Card>
        <CardHeader title="タイトル" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            ここに内容が入ります。
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">button</Button>
        </CardActions>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5">コンテンツタイトル</Typography>
          <Typography variant="body2" color="text.secondary">
            ここに主要なコンテンツが入ります。
          </Typography>
        </CardContent>
      </Card>

      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              ユーザー登録
            </Typography>
            <Stack direction="column">
              <TextField
                label="名前"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="メールアドレス"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="パスワード"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="誕生日"
                type="date"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="利用規約に同意する"
                />
              </FormGroup>
              <RadioGroup row>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="女性"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="男性"
                />
              </RadioGroup>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                登録
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>

      <Button variant="outlined" onClick={handleClick}>
        Show Snackbar
      </Button>

      <Button variant="outlined" onClick={handleDialogOpen}>
        Open Dialog
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="操作が成功しました"
        action={
          <Button color="secondary" size="small" onClick={handleClose}>
            閉じる
          </Button>
        }
      />
      <Alert severity="success">
        <AlertTitle>成功</AlertTitle>
        操作が成功しました — <strong>おめでとうございます！</strong>
      </Alert>
      <Alert severity="error">
        <AlertTitle>失敗</AlertTitle>
        操作が失敗しました — <strong>ざんねんでした！</strong>
      </Alert>
      <Alert severity="info">
        <AlertTitle>情報</AlertTitle>
        操作が行われました — <strong>うけつけしました！</strong>
      </Alert>
      <Alert severity="warning">
        <AlertTitle>情報</AlertTitle>
        操作をチェック中です — <strong>かくにんしています！</strong>
      </Alert>
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>確認</DialogTitle>
        <DialogContent>
          <p>この操作を続行しますか？</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            確認
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>名前</TableCell>
              <TableCell align="right">年齢</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>田中</TableCell>
              <TableCell align="right">30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>佐藤</TableCell>
              <TableCell align="right">25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <List>
        {items.map((item) => (
          <div key={item.id}>
            <ListItem>
              <ListItemText
                primary={<Typography variant="h6">{item.name}</Typography>}
                secondary={item.description}
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" color="primary">
                  編集
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
}

export default App;
