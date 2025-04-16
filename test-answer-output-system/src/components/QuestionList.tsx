import { Box, Checkbox, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import { questions } from "../data/questions";

interface Props {
  selectedCourse: string;
  selectedAnswers: { [key: number]: string[] };
  onSelect: (questionId: number, choices: string[]) => void;
}

const QuestionList: React.FC<Props> = ({ selectedCourse, selectedAnswers, onSelect }) => {
  if (!selectedCourse) return null;

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" color="primary" gutterBottom>
        問題一覧
      </Typography>
      {questions[selectedCourse].map((q) => (
        <Box key={q.id} mb={4} p={2} bgcolor="#fff" borderRadius={2} boxShadow={1}>
          <Typography fontWeight="bold" mb={1}>
            ・設問{q.id}
          </Typography>
          <Typography mb={2} sx={{ whiteSpace: 'pre-line' }}>{q.question}</Typography>

          {q.multiple ? (
            q.choices.map((choice) => (
              <FormControlLabel
                key={choice}
                control={
                  <Checkbox
                    disabled={!q.multiple && q.correct.includes(choice)}
                    checked={selectedAnswers[q.id]?.includes(choice) || false}
                    onChange={(e) => {
                      const current = selectedAnswers[q.id] || [];
                      const updated = e.target.checked
                        ? [...current, choice]
                        : current.filter((c) => c !== choice);
                      onSelect(q.id, updated);
                    }}
                    sx={{
                      padding: 0, // 不要な余白を削除
                      alignSelf: 'flex-start', // マークを上揃えにする
                    }}
                  />
                }
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography
                      sx={{
                        whiteSpace: 'pre-line', // 改行文字を反映
                        display: 'inline', // インライン表示
                      }}
                    >
                      {choice}
                    </Typography>
                    {q.correct.includes(choice) && (
                      <Typography
                        sx={{
                          marginLeft: 1, // 「（正解）」との間に余白を追加
                          color: 'green', // 正解ラベルの色を設定
                          fontWeight: 'bold', // 強調表示
                        }}
                      >
                        （正解）
                      </Typography>
                    )}
                  </Box>
                }
                sx={{
                  display: 'flex', // ラベル全体をフレックスボックスで扱う
                  alignItems: 'flex-start', // マークをテキストの先頭に揃える
                  margin: 0, // 不要な余白を削除
                  marginBottom: 1, // 選択肢間に余白を追加
                }}
              />
            ))
          ) : (
            <RadioGroup
              value={selectedAnswers[q.id]?.[0] || ""}
              onChange={(e) => onSelect(q.id, [e.target.value])}
              sx={{
                display: 'flex',
                flexDirection: 'column', // ラジオボタンを縦に並べる
              }}
            >
              {q.choices.map((choice) => {
                const isCorrect = q.correct.includes(choice); // 正解かどうかを判定
                return (
                  <FormControlLabel
                    key={choice}
                    value={choice}
                    control={
                      <Radio
                        disabled={isCorrect} // 正解の選択肢は選択不可
                        sx={{
                          padding: 0, // 不要な余白を削除
                          alignSelf: 'flex-start', // マークを上揃えにする
                        }}
                      />
                    }
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography
                          sx={{
                            whiteSpace: 'pre-line', // 改行文字を反映
                            display: 'inline', // インライン表示
                          }}
                        >
                          {choice}
                        </Typography>
                        {isCorrect && (
                          <Typography
                            sx={{
                              marginLeft: 1, // 「（正解）」との間に余白を追加
                              color: 'green', // 正解ラベルの色を設定
                              fontWeight: 'bold', // 強調表示
                            }}
                          >
                            （正解のため選択不可）
                          </Typography>
                        )}
                      </Box>
                    }
                    sx={{
                      display: 'flex', // ラベル全体をフレックスボックスで扱う
                      alignItems: 'flex-start', // マークをテキストの先頭に揃える
                      margin: 0, // 不要な余白を削除
                      marginBottom: 1, // 選択肢間に余白を追加
                    }}
                  />
                );
              })}
            </RadioGroup>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default QuestionList;
