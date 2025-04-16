import { Button } from "@mui/material";
import React from "react";
import { Question, questions } from "../data/questions";

interface Props {
  selectedCourse: string; // 選択されたコース名
  selectedAnswers: { [key: number]: string[] }; // ユーザーが選択した回答
}

const DownloadButton: React.FC<Props> = ({ selectedCourse, selectedAnswers }) => {
  // 文字列を正規化する関数（空白や改行を削除）
  const normalize = (str: string) => str.replace(/\s+/g, '').replace(/\n/g, '').trim();

  // テキストが複数行かどうかを判定する関数
  const isMultiline = (text: string) => text.includes('\n');

  const handleDownload = () => {
    // コースが選択されていない場合は処理を中断
    if (!selectedCourse) return;

    // 不正解の設問をフィルタリング
    const incorrectAnswers = questions[selectedCourse].filter((q) => {
      const userAns = selectedAnswers[q.id] || []; // ユーザーの回答を取得
      if (userAns.length === 0) return false; // 未回答は不正解リストに含めない

      // 正解セットとユーザーの回答を正規化して比較
      const normalizeSet = new Set(q.correct.map(normalize));
      const userNormalized = new Set(userAns.map(normalize));

      // 回答数と正解数が異なる場合は不正解
      if (userNormalized.size !== normalizeSet.size) return true;

      // 全ての回答が正解セットに含まれているか確認
      for (const ans of userNormalized) {
        if (!normalizeSet.has(ans)) return true; // 不正解の場合
      }

      return false; // 正解の場合
    });

    // 選択肢のマーカー（☑や□）を生成する関数
    const getMarker = (
      question: Question,
      choice: string,
      selectedChoices: string[] = [],
      forceMultiline: boolean
    ) => {
      const normalizedChoice = normalize(choice); // 選択肢を正規化
      const normalizedSelected = selectedChoices.map(normalize); // ユーザーの選択肢を正規化
      const mark = question.multiple ? '☑' : '⚫︎'; // 選択済みマーカー
      const unmark = question.multiple ? '□' : '⚪︎'; // 未選択マーカー
      const marker = normalizedSelected.includes(normalizedChoice) ? mark : unmark;

      // 選択肢が複数行の場合、改行を追加
      return forceMultiline || isMultiline(choice)
        ? `${marker}\n${choice}\n`
        : `${marker}${choice}\n`;
    };

    // 出力ファイルのヘッダー部分
    const header = `【注意事項】
●、☑はご自身が選択した回答です。
複数選択問題の場合、正解をすべて選んでいなければ誤答とみなされます。

${selectedCourse === 'HTMLCSS' ? 'HTML・CSS初歩コース卒業試験_不正解箇所まとめ' : 'React基礎コース卒業試験_不正解箇所まとめ'}
`;

    // 不正解の設問を出力用のテキストに変換
    const body = incorrectAnswers.map(q => {
      const selected = selectedAnswers[q.id] || []; // ユーザーの回答を取得
      if (selected.length === 0) return ''; // 未回答の場合は出力しない

      // 設問内に複数行の選択肢があるかを判定
      const hasMultilineChoice = q.choices.some(isMultiline);

      // 各選択肢にマーカーを付けてテキスト化
      const choicesText = q.choices
        .map(choice => getMarker(q, choice, selected, hasMultilineChoice))
        .join('\n'); // 選択肢同士の改行

      // 設問のテキストを生成
      return `＝＝＝＝＝＝＝＝＝＝

・設問${q.id}
${q.question.trim()}

${choicesText}`;
    }).filter(Boolean).join('\n\n'); // 空の設問を除外して結合

    // ヘッダーと本文を結合して最終的なテキストを生成
    const finalText = header + '\n' + body;

    // BOM追加 + 改行をCRLFに変換（Windows対策）
    const utf8Bom = new Uint8Array([0xEF, 0xBB, 0xBF]); // UTF-8 BOM
    const crlfText = finalText.replace(/\n/g, '\r\n'); // 改行コードをCRLFに変換
    const blob = new Blob([utf8Bom, crlfText], { type: 'text/plain;charset=utf-8' });

    // ダウンロードリンクを生成してクリックイベントを発火
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${selectedCourse === 'HTMLCSS' ? 'HTML・CSS初歩コース' : 'React基礎コース'}卒業試験_不正解箇所まとめ.txt`;
    link.click();
  };

  return (
    // ダウンロードボタン
    <Button
      variant="contained"
      color="primary"
      onClick={handleDownload}
      sx={{ mt: 4 }}
    >
      誤答リストをダウンロード
    </Button>
  );
};

export default DownloadButton;
