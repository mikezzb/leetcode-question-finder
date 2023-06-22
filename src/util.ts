import QidMap from "./data/qid_map.json";
import NumPinyin from "./data/number_pinyin.json";
import pinyin from "pinyin";

const getUrlFromTitle = (title: string) =>
  `https://leetcode.com/problems/${title}/`;

export const getQuestionById = (id: string): string | undefined => {
  // check if id is number
  let title = QidMap[id as any];
  if (title === undefined) {
    let query = "";
    // parse chinese qid
    if (id.match(/[\u3400-\u9FBF]/)) {
      const py = pinyin(id, { style: "normal" });
      py.forEach((yin) => {
        const val = NumPinyin[yin as any];
        if (val != undefined) {
          query += val;
        }
      });
    } else {
      // keep only 0-9 in id
      query = id.replace(/\D/g, "");
    }
    // map to title
    title = QidMap[parseInt(query, 10)];
  }
  if (title) {
    return getUrlFromTitle(title);
  }
};
