export type Question = {
  id: number;
  question: string;
  choices: string[];
  correct: string[]; // 正解（複数対応）
  multiple: boolean; // 択一選択 or 複数選択
};

export const questions: { [course: string]: Question[] } = {
  HTMLCSS: [
    {
      id: 1,
      question: `画像のようにWebサイトに説明リストを記述する場合、以下のソースコードの中に当てはまるもので正しい組み合わせのものを選択しなさい

<①>
  <②>HTML</②>
  <③>ウェブページを作成するために開発された言語</③>
  <③>構造的な文書を作る</③>
  <②>CSS</②>
  <③>ウェブページのスタイルを指定するための言語</③>
</①>

(※別途画像添付)`,
      choices: ["①dl ②dt ③dd", "①dl ②dd ③dt", "①dt ②dd ③dl", "①dt ②dl ③dd", "①dd ②dl ③dt", "①dd ②dt ③dd"],
      correct: ["①dl ②dt ③dd"],
      multiple: false
    },
    {
      id: 2,
      question: `ドキュメント宣言の記述として正しいものを選択しなさい`,
      choices: ["<!DOCTYPE>", "<DOCTYPE>", "<!DOCTYPE html>", "<DOCTYPE html>", "<!-- DOCTYPE -->", "<!-- DOCTYPE html -->"],
      correct: ["<!DOCTYPE html>"],
      multiple: false
    },
    {
      id: 3,
      question: `HTMLにおいて文書全体がどの言語で書かれているのか指定する場合にlang属性を設定する要素はどれか。正しいものを選択しなさい`,
      choices: ["head", "html", "body", "title", "meta", "div"],
      correct: ["html"],
      multiple: false
    },
    {
      id: 4,
      question: `input要素のtype属性に指定できる値として誤っているものを選択しなさい`,
      choices: ["email", "address", "text", "number", "password", "submit"],
      correct: ["address"],
      multiple: false
    },
    {
      id: 5,
      question: `HTMLにて、id属性やclass属性を設定する上で正しいものをすべて選択しなさい`,
      choices: [
        "id属性やclass属性は、全ての要素に設定できる",
        "id属性やclass属性を設定できない要素がある",
        "id属性やclass属性は、body要素の中で使用する要素にしか設定できない",
        "id属性やclass属性は、body要素には設定できない",
        "id属性やclass属性は、html要素とhead要素に設定できる",
        "id属性やclass属性は、必ず設定しなくてはならない"
      ],
      correct: ["id属性やclass属性は、全ての要素に設定できる", "id属性やclass属性は、html要素とhead要素に設定できる"],
      multiple: true
    },
    {
      id: 6,
      question: `id属性とclass属性の説明について正しいものをすべて選択しなさい`,
      choices: [
        "1つの要素に対して,（カンマ）で区切ることで複数のclass属性を設定することができる",
        "同じid属性はWebサイト全体で1つしか指定することができない",
        "class属性は主にCSSでスタイルを当てる時に使う",
        "同じ要素に複数のid属性を設定しても問題ない",
        "id属性の値に、id=”01id”のような先頭文字が数字から始まる値を設定することはできない"
      ],
      correct: [
        "class属性は主にCSSでスタイルを当てる時に使う",
        "id属性の値に、id=”01id”のような先頭文字が数字から始まる値を設定することはできない"
      ],
      multiple: true
    },
    {
      id: 7,
      question: `以下のform要素に当てはまる数字の組合せを選択肢より選択しなさい
    
送信先:contact.html
送信方法:post

<form ①="contact.html" ②="post">
    <div>
        <label for="user_name">お名前</label>
        <③ id="user_name" name="user_name" type="text">
    </div>
    <div>
        <label for="user_age">年齢</label>
        <④ id="user_age" name="user_age">
            <option value="1">〜19歳</option>
            <option value="2">20〜29歳</option>
            <option value="3">30〜39歳</option>
            <option value="4">40歳〜</option>
        </select>
    </div>
    （...省略...）
</form>`,
      choices: [
        "①method ②action ③text ④select",
        "①send ②method ③text ④radio",
        "①action ②method ③input ④select",
        "①method ②action ③input ④input",
        "①get ②method ③input ④input",
        "①action ②get ③input ④choice"
      ],
      correct: ["①action ②method ③input ④select"],
      multiple: false
    },
    {
      id: 8,
      question: `ブロックレベル要素とインライン要素の説明について正しいものをすべて選択しなさい`,
      choices: [
        "h6要素は、ブロックレベル要素のひとつです",
        "インライン要素は、高さと幅を自由に指定することができる",
        "a要素は、ブロックレベル要素のひとつです",
        "ブロックレベル要素の中にブロックレベル要素はコーディングできるが、インライン要素の中にインライン要素はコーディングできない",
        "<span>1</span>\n<span>2</span>\n<span>3</span>\n\n上記のようにコーディングした場合、1 2 3と横並びで表示される"

      ],
      correct: [
        "h6要素は、ブロックレベル要素のひとつです",
        "<span>1</span>\n<span>2</span>\n<span>3</span>\n\n上記のようにコーディングした場合、1 2 3と横並びで表示される"
      ],
      multiple: true
    },
    {
      id: 9,
      question: `HTMLに存在しない要素をすべて選択しなさい`,
      choices: ["section", "navigation", "header", "sidebar", "display", "textarea"],
      correct: ["navigation", "sidebar", "display"],
      multiple: true
    },
    {
      id: 10,
      question: `選択肢より正しいものを選択しなさい

margin: 10px 20px 30px 40px;`,
      choices: [
        "上10px、下20px、左30px、右40pxの余白が要素の内側に出来る",
        "上10px、下20px、左30px、右40pxの余白が要素の外側に出来る",
        "上10px、右20px、下30px、左40pxの余白が要素の内側に出来る",
        "上10px、右20px、下30px、左40pxの余白が要素の外側に出来る"
      ],
      correct: ["上10px、右20px、下30px、左40pxの余白が要素の外側に出来る"],
      multiple: false
    },
    {
      id: 11,
      question: `セレクタの使用方法に誤りがあるものをすべて選択しなさい`,
      choices: ["div > p {}", "div < p {}", "div .p {}", "#p {}", "input[type+=\"text\"] {}", "[type*=\"text\"] {}"],
      correct: ["div < p {}", "input[type+=\"text\"] {}"],
      multiple: true
    },
    {
      id: 12,
      question: `外部のstyle.cssファイルを読み込みデザインをあてる場合の正しいコーディングを選択しなさい`,
      choices: [
        "<link rel=\"stylesheet\" href=\"style.css\">",
        "<link rel=\"stylesheet\" src=\"style.css\">",
        "<meta rel=\"stylesheet\" href=\"style.css\">",
        "<meta rel=\"stylesheet\" src=\"style.css\">",
        "<style rel=\"stylesheet\" href=\"style.css\">",
        "<style rel=\"stylesheet\" src=\"style.css\">"
      ],
      correct: ["<link rel=\"stylesheet\" href=\"style.css\">"],
      multiple: false
    },
    {
      id: 13,
      question: `colorプロパティの値として黒色を設定したい場合、誤っているものをすべて選択しなさい
      
color: <値>;`,
      choices: ["#00000", "#black", "black", "rgb(0,0,0)", "0,0,0", "r0,g0,b0", "hsl(0,0%,0%)", "BLACK"],
      correct: ["#00000", "#black", "0,0,0", "r0,g0,b0"],
      multiple: true
    },
    {
      id: 14,
      question: `以下のCSSの記述と同等の指定として正しいものをすべて選択しなさい

padding-top: 10px;
padding-bottom: 10px;
padding-right: 20px;
padding-left: 20px;`,
      choices: [
        "padding: 20px 10px;",
        "padding: 10px 20px;",
        "padding: 10px 20px 10px;",
        "padding: 20px 10px 20px;",
        "padding: 10px 20px 10px 20px;",
        "padding: 10px 10px 20px 20px;"
      ],
      correct: ["padding: 10px 20px;", "padding: 10px 20px 10px;", "padding: 10px 20px 10px 20px;"],
      multiple: true
    },
    {
      id: 15,
      question: `html要素のフォントサイズを基準として、要素のフォントサイズを1.5倍にする場合の正しいコーディングを選択しなさい`,
      choices: ["font-size: 150%;", "font-size: 1.5em;", "font-size: 1.5rem;", "font-size: 150px;"],
      correct: ["font-size: 1.5rem;"],
      multiple: false
    },
    {
      id: 16,
      question: `以下のようなHTMLがあります。

<div id="test">
    Test
    <div id="test1">Test1</div>
    <div id="test2">Test2</div>
</div>

画像のようにボーダーを再現したい場合、正しいデザインを当てているCSSをすべて選択しなさい。

(※別途画像添付)`,
      choices: [
        `#test {\n    border: 1px one blue;\n}`,
        `#test {\n    border: 1px solid blue;\n}`,
        `#test1 {\n    border: medium dashed blue;\n}`,
        `#test1 {\n    border: 3px dotted blue;\n}`,
        `#test2 {\n    border: 10px double blue;\n}`,
        `#test2 {\n    border: 10px bold blue;\n}`
      ],
      correct: [
        `#test {\n    border: 1px solid blue;\n}`,
        `#test1 {\n    border: medium dashed blue;\n}`,
        `#test2 {\n    border: 10px double blue;\n}`
      ],
      multiple: true
    },
    {
      id: 17,
      question: `プロパティと説明が正しいものをすべて選択しなさい`,
      choices: [
        "font-size: 16px;\n文字の大きさを16pxにする",
        "background-color: yellow;\n文字の色を黄色にする",
        "text-align: center;\n文字の垂直方向の配置を中央揃えにする",
        "overflow: visible;\nテキストが親要素に収まらない場合は非表示にする",
        "border-radius: 50px;\n要素の角を半径50pxで丸く装飾する"
      ],
      correct: ["font-size: 16px;\n文字の大きさを16pxにする", "border-radius: 50px;\n要素の角を半径50pxで丸く装飾する"],
      multiple: true
    },
    {
      id: 18,
      question: `以下をブラウザで表示確認した時、左から表示されている要素の並びで正しいものを選択しなさい

<div class="box-1">BOX1</div>
<div class="box-2">BOX2</div>
<div class="box-3">BOX3</div>
<div class="box-4">BOX4</div>
<div class="box-5">BOX5</div>

.box-1 { float: right; }
.box-2 { float: left; }
.box-3 { float: right; }
.box-4 { float: right; }
.box-5 { float: left; }`,
      choices: ["BOX1 > BOX3 > BOX4 > BOX2 > BOX5", "BOX2 > BOX5 > BOX1 > BOX3 > BOX4", "BOX2 > BOX5 > BOX4 > BOX3 > BOX1", "BOX2 > BOX1 > BOX5 > BOX3 > BOX4", "BOX5 > BOX2 > BOX1 > BOX3 > BOX4"],
      correct: ["BOX2 > BOX5 > BOX4 > BOX3 > BOX1"],
      multiple: false
    },
    {
      id: 19,
      question: `以下のようなHTMLとCSSがあった時、画像のように子と表示されるdiv要素を中央寄せにしたい。その場合＜プロパティ＞に設定すると中央寄せのデザインを当てることができるプロパティを全て選択しなさい

<div class="parent">
    <div class="child">子</div>
</div>

.parent {
    height: 200px;
    background-color: skyblue;
}
.child {
    height: 200px;
    width: 200px;
    background-color: yellow;
    < プロパティ >
}
      
(※別途画像添付)`,
      choices: [
        "margin-left: auto;\nmargin-right: auto;",
        "margin: 0 auto;",
        "padding-right: auto;\npadding-left: auto;",
        "padding: 0 auto;",
        "margin-left: 0;\nmargin-right: 0;",
        "margin: auto 0;",
        "padding: auto 0;",
        "padding-right: 0;\npadding-left: 0;"
      ],
      correct: ["margin-left: auto;\nmargin-right: auto;", "margin: 0 auto;"],
      multiple: true
    },
    {
      id: 20,
      question: `画像と同じように先頭が1と表示されるHTMLとCSSの組み合わせをすべて選択しなさい
      
(※別途画像添付)`,
      choices: [
        `<ol>\n  <li>HTML</li>\n</ol>\n<ul>\n  <li>CSS</li>\n</ul>\n\nul {\n  list-style-type: decimal;\n}`,
        `<ol>\n  <li>HTML</li>\n</ol>\n<ul>\n  <li>CSS</li>\n</ul>\n\nol {\n  list-style-type: decimal;\n}`,
        `<ol>\n  <li>HTML</li>\n  <li>CSS</li>\n</ol>\n\nol {\n  list-style-type: none;\n}`,
        `<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n\nul {\n  list-style-type: none;\n}`,
        `<ol>\n  <li>HTML</li>\n</ol>\n<ul>\n  <li>CSS</li>\n</ul>\n\nol {\n  list-style-type: circle;\n}\nul {\n  list-style-type: circle;\n}`,
        `<ol>\n  <li>HTML</li>\n</ol>\n<ol>\n  <li>CSS</li>\n</ol>\n\nol {\n  list-style-type: none;\n}`,
        `<ul>\n  <li>HTML</li>\n</ul>\n<ul>\n  <li>CSS</li>\n</ul>\n\nul {\n  list-style-type: decimal;\n}`
      ],
      correct: [
        `<ol>\n  <li>HTML</li>\n</ol>\n<ul>\n  <li>CSS</li>\n</ul>\n\nul {\n  list-style-type: decimal;\n}`,
        `<ul>\n  <li>HTML</li>\n</ul>\n<ul>\n  <li>CSS</li>\n</ul>\n\nul {\n  list-style-type: decimal;\n}`
      ],
      multiple: true
    }
  ],
  TSReact: [
    {
      id: 1,
      question: `エラーになる処理を選択しなさい。`,
      choices: [
        `import React from 'react';\n\nconst App: React.FC = () => {\n  return (\n    <Fragment>\n      <h1>Reactコース</h1>\n      <p>コース卒業試験</p>\n    </Fragment>\n  );\n};\n\nexport default App;`,
        `import React from 'react';\n\nconst App: React.FC = () => {\n  return (\n    <div>\n      <h1>Reactコース</h1>\n    </div>\n  );\n};\n\nexport default App;`,
        `import React from 'react';\n\nconst App: React.FC = () => {\n  return (\n    <h1>Reactコース</h1>\n  );\n};\n\nexport default App;`,
        `import React from 'react';\n\nconst App: React.FC = () => {\n  return (\n    <>\n      <h1>Reactコース</h1>\n      <p>コース卒業試験</p>\n    </>\n  );\n};\n\nexport default App;`
      ],
      correct: [
        `import React from 'react';\n\nconst App: React.FC = () => {\n  return (\n    <Fragment>\n      <h1>Reactコース</h1>\n      <p>コース卒業試験</p>\n    </Fragment>\n  );\n};\n\nexport default App;`
      ],
      multiple: false
    },
    {
      id: 2,
      question: `Appコンポーネントが以下のように実装されている場合、Childコンポーネントの実装として適切なものを選択しなさい。

import React from 'react';
import './App.css';
import Child from './Child';

const App: React.FC = () => {

  return (
    <div className='App'>
      <Child text="sample"/>
    </div>
  );
};

export default App;`,
      choices: [
        `import React from 'react';\n\ninterface Props {\n  text: string;\n}\n\nconst Child: React.FC<Props> = (props) => {\n  return (\n   <div>{ props.text }</div>\n  );\n};\n\nexport default Child;`,
        `import React from 'react';\n\ninterface Props {\n  text: string;\n}\n\nconst Child: React.FC<Props> = (props) => {\n  return (\n   <div>{ props }</div>\n  );\n};\n\nexport default Child;`,
        `import React from 'react';\n\nconst Child: React.FC = () => {\n  return (\n    <div>{ text }</div>\n  );\n};\n\nexport default Child;`,
        `import React from 'react';\n\nconst Child: React.FC = (text) => {\n  return (\n    <div>{ text }</div>\n  );\n};\n\nexport default Child;`
      ],
      correct: [
        `import React from 'react';\n\ninterface Props {\n  text: string;\n}\n\nconst Child: React.FC<Props> = (props) => {\n  return (\n   <div>{ props.text }</div>\n  );\n};\n\nexport default Child;`,
      ],
      multiple: false
    },
    {
      id: 3,
      question: `ボタンをクリックするとカウントが1ずつ加算される処理を実装したい。

①に入る適切な記述を選択しなさい。

import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);

  return (
    <div>
      <p>{ count }</p>
      <button ①>ボタン</button>
    </div>
  );
};

export default App;`,
      choices: [
        "onClick={() => setCount(count + 1)}",
        "onClick={() => setCount(count++)}",
        "onClick={() => count + 1}",
        "onClick={() => count++}",
        "onClick={incremnet}",
        "onClick={() => increment(count + 1)}"
      ],
      correct: ["onClick={() => setCount(count + 1)}"],
      multiple: false
    },
    {
      id: 4,
      question: `inputタグのonChangeイベントで、入力した値を取得してvalueを更新する処理を実装したい。

①に入る適切な記述を選択しなさい。

import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [ value, setValue ] = useState(0);
  const [ count, setCount ] = useState(0);

  const handleChangeValue = (e: any): void => {
    // ①
  }

  const handleIncrementCount = (): void => {
    setCount(count + value);
  };

  return (
    <>
      <p>{ count }</p>
      <input type="number" onChange={handleChangeValue}/>
      <button onClick={handleIncrementCount}>更新</button>
    </>
  );
};

export default App;`,
      choices: [
        "setValue(Number(e.target.value));",
        "setValue(e.target.value);",
        "setValue(Number(count + e.target.value));",
        "setValue(count + e.target.value);",
        "setValue(Number(count));",
        "setValue(count);"
      ],
      correct: ["setValue(Number(e.target.value));"],
      multiple: false
    },
    {
      id: 5,
      question: `以下のコードを確認し、ボタンタグの①に入る適切な記述を選択しなさい。

import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [ value, setValue ] = useState("");
  const [ text, setText ] = useState("");

  const handleChangeValue = (e: any): void => {
    setValue(e.target.value);
  }

  const handleUpdateText = (): void => {
    setText(value);
  };

  const handleResetText = (resetText: string): void => {
    setText(resetText);
  };

  return (
    <>
      <input type="text" onChange={handleChangeValue}/>
      <button onClick={handleUpdateText}>更新</button>
      <button ① >リセット</button>
      <p>{ text }</p>
    </>
  );
};

export default App;`,
      choices: [
        "onClick={() => handleResetText(\"\")}",
        "onClick={handleResetText(\"\")}",
        "onClick={{() => handleResetText(\"\")}}",
        "onClick={{handleResetText(\"\")}}"
      ],
      correct: ["onClick={() => handleResetText(\"\")}"],
      multiple: false
    },
    {
      id: 6,
      question: "エラーになる処理を選択しなさい。",
      choices: [
        `import React from 'react';\nimport './App.css';\n\nconst App: React.FC = () => {\n  const num: number = 10;\n\n  return (\n    <h1>\n      {(() => {\n        if (num > 5) {\n          return 'Reactコース';\n        } else {\n          return 'Vueコース';\n        }\n      })}\n    </h1>\n  )\n};\n\nexport default App;`,
        `import React from 'react';\nimport './App.css';\n\nconst App: React.FC = () => {\n  const num: number = 10;\n\n  if (num > 5) {\n    return <h1>Reactコース</h1>\n  } else {\n    return <h1>Vueコース</h1>\n  }\n};\n\nexport default App;`,
        `import React from 'react';\nimport './App.css';\n\nconst App: React.FC = () => {\n  const num: number = 10;\n\n  return (\n    <h1>\n      { num > 5 ? 'Reactコース' : 'Vueコース'}\n    </h1>\n  )\n};\n\nexport default App;`,
        `import React from 'react';\nimport './App.css';\n\nconst App: React.FC = () => {\n  const num: number = 10;\n\n  return (\n    <h1>\n      {(() => {\n        if (num > 5) {\n          return 'Reactコース';\n        } else {\n          return 'Vueコース';\n        }\n      })()}\n    </h1>\n  )\n};\n\nexport default App;`
      ],
      correct: [
        `import React from 'react';\nimport './App.css';\n\nconst App: React.FC = () => {\n  const num: number = 10;\n\n  return (\n    <h1>\n      {(() => {\n        if (num > 5) {\n          return 'Reactコース';\n        } else {\n          return 'Vueコース';\n        }\n      })}\n    </h1>\n  )\n};\n\nexport default App;`
      ],
      multiple: false
    },
    {
      id: 7,
      question: `以下のコードの確認し、itemsの配列データを<ul>タグ内で全てリスト表示する処理として、適切なものを選択しなさい。

import React from 'react';

interface Items {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const items: Items[] = [
    {id: 1, name: "React"},
    {id: 2, name: "Angular"},
    {id: 3, name: "Vue"},
  ];

  return (
    <ul>
      
    </ul>
  );
};

export default App;`,
choices: [
  `{items.map((item) =>
    <li key={item.id}>{item.name}</li>
)}`,
  `{
(() => {
  items.map((item) =>
    <li key={item.id}>{item.name}</li>
  )}
)}`,
  `{() => {
  items.map((item) =>
    <li key={index}>{item.name}</li>
  )}
}`,
  `{items.map((item) =>
  <li key={index}>{item.name}</li>
)}`
],
correct: [
  `{items.map((item) =>
    <li key={item.id}>{item.name}</li>
)}`
],
      multiple: false
    },
    {
      id: 8,
      question: `以下のコードは、フォームの処理の部分のみ実装したコードである。

return文の中にフォームを実装する場合、実装済みのコードが正常に動作するものを選択しなさい。

import React from 'react';
import { useState } from 'react';

const Shiken: React.FC = () => {
  const [name, setName] = useState("");

  const handleChange = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
  };

  return (

  );
};

export default Shiken;`,
choices: [
        `<form onSubmit={handleSubmit}>\n  <input type="text" value={name} onChange={handleChange} />\n  <input type="submit" value="送信" />\n</form>`,
        `<form onSubmit={handleSubmit}>\n  <input type="text" value="" onChange={handleChange} />\n  <input type="submit" value="送信" />\n</form>`,
        `<form>\n  <input type="text" value={name} onChange={handleChange} />\n  <input type="submit" value="送信" onSubmit={handleSubmit} />\n</form>`,
        `<form>\n  <input type="text" value="" onChange={handleChange} />\n  <input type="submit" value="送信" onSubmit={handleSubmit} />\n</form>`,
        `<form onClick={handleSubmit}>\n  <input type="text" value={name} onChange={handleChange} />\n  <input type="submit" value="送信" />\n</form>`,
        `<form>\n  <input type="text" value="" onChange={handleChange} />\n  <input type="submit" value="送信" onClick={handleSubmit} />\n</form>`
      ],
      correct: [
        `<form onSubmit={handleSubmit}>\n  <input type="text" value={name} onChange={handleChange} />\n  <input type="submit" value="送信" />\n</form>`
      ],
      multiple: false
    },
    {
      id: 9,
      question: "Reactに関する説明で誤っているものを選択しなさい。",
      choices: [
        "useStateとuseEffectは複数利用することが可能だが、双方が同一の数となるよう定義する必要がある。",
        "コンポーネントで状態管理を行うにはuseStateでstate変数を定義し、更新専用の関数を使って値の変更を行う。",
        "createContextを利用することで、コンポーネントを跨いだグローバルな状態管理が可能となる。",
        "useEffect初回のみ実行するためには、第二引数を空配列にする必要がある。",
        "useMemoを利用することで負荷の高い処理を伴う変数を最適化することができる。"
      ],
      correct: [
        "useStateとuseEffectは複数利用することが可能だが、双方が同一の数となるよう定義する必要がある。"
      ],
      multiple: false
    },
    {
      id: 10,
      question: "Reactに関する説明で誤っているものをすべて選択しなさい。",
      choices: [
        "ページ用のコンポーネントを作成する場合は、pagesというディレクトリに配置しなければならない。",
        "状態管理を行うuseStateを利用する場合は、初期値の設定を必ずしなければならない。",
        "要素に対してCSSのクラスを適用したい場合は、classではなくclassNameと記述しなければならない。",
        "<label>タグにfor属性を指定したい場合は、forではなくhtmlForと記述しなければならない。",
        "要素にクリックなどのイベントを実装したい場合は、イベント名をキャメルケースで記述しなければならない。"
      ],
      correct: [
        "ページ用のコンポーネントを作成する場合は、pagesというディレクトリに配置しなければならない。",
        "状態管理を行うuseStateを利用する場合は、初期値の設定を必ずしなければならない。",
      ],
      multiple: true
    },
    {
      id: 11,
      question: `ReactRouterを利用して、ページ遷移なしのリンクを設置したい。
    
適切な記述を選択しなさい。
    
なお、各種importはしているものとする。`,
      choices: [
        `const App: React.FC = () => {\n\n  return (\n    <div>\n      <div>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </div>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </div>\n  );\n};`,
        `const App: React.FC = () => {\n\n  return (\n    <div>\n      <div>\n        <a href="/">Home</a>\n        <a href="/about">About</a>\n      </div>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </div>\n  );\n};`,
        `const App: React.FC = () => {\n\n  return (\n    <div>\n      <div>\n        <NavLink href="/">Home</NavLink>\n        <NavLink href="/about">About</NavLink>\n      </div>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </div>\n  );\n};`,
        `const App: React.FC = () => {\n\n  return (\n    <div>\n      <div>\n        <NavLink for="/">Home</NavLink>\n        <NavLink for="/about">About</NavLink>\n      </div>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </div>\n  );\n};`
      ],
      correct: [
        `const App: React.FC = () => {\n\n  return (\n    <div>\n      <div>\n        <Link to="/">Home</Link>\n        <Link to="/about">About</Link>\n      </div>\n      <Routes>\n        <Route path="/" element={<Home />} />\n        <Route path="/about" element={<About />} />\n      </Routes>\n    </div>\n  );\n};`
      ],
      multiple: false
    },
    {
      id: 12,
      question: "フックに関する説明で正しいものをすべて選択しなさい。",
      choices: [
        "useMemoは関数の計算結果の値をメモ化するフックである。",
        "useCallbackは関数をメモ化するフックである。",
        "useStateのstate変数を直接変更することがはできない。",
        "useEffectの第二引数を空文字にすると初回のみ処理が実行される。"
      ],
      correct: [
        "useMemoは関数の計算結果の値をメモ化するフックである。",
        "useCallbackは関数をメモ化するフックである。",
        "useStateのstate変数を直接変更することがはできない。"
      ],
      multiple: true
    },
    {
      id: 13,
      question: `以下のコードを確認し、divタグ内の①に入る記述として適切なものを選択しなさい。
    
import React from 'react';
import './App.css';
import { createContext, useState } from 'react';
import Counter from './components/Counter';

export type CounterContextType = {
  text: string;
  count: number;
  setCount: (count: number) => void;
}

export const CounterContext = createContext<CounterContextType>({
  text: "",
  count: 0,
  setCount: () => {}
});

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);
  const text: string = "Reactコース";

  const increment = (): void => {
    setCount(count + 1);
  };

  const contextValue = {
    text, count, setCount
  }

  return (
    <div className="App">
      ①
    </div>
  );
};

export default App;`,
      choices: [
        `<CounterContext.Provider value={contextValue}>\n  <Counter />\n</CounterContext.Provider>`,
        `<CounterContext value={contextValue}>\n  <Counter />\n</CounterContext>`,
        `<CounterContext.Provide value={contextValue}>\n  <Counter />\n</CounterContext.Provide>`,
        `<CounterContext.Probe value={contextValue}>\n  <Counter />\n</CounterContext.Probe>`
      ],
      correct: [
        `<CounterContext.Provider value={contextValue}>\n  <Counter />\n</CounterContext.Provider>`
      ],
      multiple: false
    },
    {
      id: 14,
      question: `courses配列内の要素分Courseコンポーネントを呼び出す場合、①に入る適切な処理を選択しなさい。
    
import React from 'react';
import Course from './Course';

interface Courses {
  id: number;
  name: string;
  release: Date;
}

const App: React.FC = () => {
  const courses: Courses[] = [
    {id: 1, name: "Vueコース", release: new Date(2023, 2, 10)},
    {id: 2, name: "Angularコース", release: new Date(2023, 2, 17)},
    {id: 3, name: "Reactコース", release: new Date(2023, 3, 24)},
  ];

  return (
    <div>
      <ul>
        ①
      </ul>
    </div>
  );
};

export default App;`,
      choices: [
        `{courses.map((course) =>\n  <Course\n    key={course.id}\n    id={course.id}\n    name={course.name}\n    release={course.release} />\n)}`,
        `{courses.map((course) =>\n  <Course\n    id={course.id}\n    name={course.name}\n    release={course.release} />\n)}`,
        `{courses.map((course) =>\n  <Course\n    id={id}\n    name={name}\n    release={release} />)}`,
        `{courses.map((course) =>\n  <Course\n    key={id}\n    id={id}\n    name={name}\n    release={release} />\n)}`,
        `{courses.map((course) =>\n  <Course\n    key={course.index}\n    id={course.id}\n    name={course.name}\n    release={course.release} />\n)}`
      ],
      correct: [
        `{courses.map((course) =>\n  <Course\n    key={course.id}\n    id={course.id}\n    name={course.name}\n    release={course.release} />\n)}`
      ],
      multiple: false
    }
  ]
};
