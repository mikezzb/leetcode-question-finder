import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import QidMap from "./data/qid_map.json";
import NumPinyin from './data/number_pinyin.json';
import pinyin from "pinyin";

const getUrlFromTitle = (title: string) => `https://leetcode.com/problems/${title}/`;

const openQuestionById = (id: string) => {
  // check if id is number
  let title = QidMap[id as any];
  if (title === undefined) {
    let query = "";
    // parse chinese qid
    if (id.match(/[\u3400-\u9FBF]/)) {
      const py = pinyin(id, { style: 'normal' });
      py.forEach(yin => {
        const val = NumPinyin[yin as any];
        if (val != undefined) {
          query += val;
        }
      })
    } else {
      // keep only 0-9 in id
      query = id.replace(/\D/g,'');
    }
    // map to title
    title = QidMap[parseInt(query, 10)];
  }
  if (title) {
    window.open(getUrlFromTitle(title), "_blank");
  }
}

const Popup: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <>
      <form
        onSubmit={e => {
          openQuestionById(query);
          e.preventDefault();
        }}
      >
        <input placeholder="Input question number" value={query} onChange={e => setQuery(e.target.value)} />
      </form>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
