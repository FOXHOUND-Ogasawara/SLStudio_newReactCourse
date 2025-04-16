import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CourseSelector from "../components/CourseSelector";
import DownloadButton from "../components/DownloadButton";
import QuestionList from "../components/QuestionList";

const Home: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string[] }>({});

  // コースが切り替わったときに選択状態をリセット
  useEffect(() => {
    setSelectedAnswers({});
  }, [selectedCourse]);

  const handleSelect = (questionId: number, choices: string[]) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: choices,
    }));
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom color="primary">
          卒業試験 誤答リスト作成
        </Typography>

        <Box mb={2}>
          <Typography variant="body1" color="textSecondary">
            この画面で学習者の受けたコースを選び、不正解だった設問の選択肢を選んでください。<br />
            最後に「誤答リストをダウンロード」を押すとテキストにまとめてくれます。<br />
            <br />
            【簡易仕様】<br />
            択一式では、正解の選択肢は非活性にしています。<br />
            複数選択式では、正解+余分なのも選んで誤答になる場合も考慮して、非活性にはせず全て選べるようにしています。<br />
            (残りはREADME.mdを見てください)<br />
            <br />
            ※注意事項<br />
            Windowsのメモ帳では文字化けが発生することがあります。<br />
            <strong>VSCodeやメモ帳以外のエディタ</strong>で開いてください。
          </Typography>
        </Box>

        <Box mb={3}>
          <CourseSelector selectedCourse={selectedCourse} onChange={setSelectedCourse} />
        </Box>

        <Box mb={3}>
          <QuestionList
            selectedCourse={selectedCourse}
            selectedAnswers={selectedAnswers}
            onSelect={handleSelect}
          />
        </Box>

        <DownloadButton
          selectedCourse={selectedCourse}
          selectedAnswers={selectedAnswers}
        />
      </Paper>
    </Container>
  );
};

export default Home;