import { getQuestionById } from "../util";

test("Find by question number", () => {
  expect(getQuestionById("1024")).toBe("https://leetcode.com/problems/video-stitching/");
});

test("Find by chinese question number", () => {
  expect(getQuestionById("六三二")).toBe("https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/");
});

test("Find by chinese question number (alias)", () => {
  expect(getQuestionById("宜漆伞")).toBe("https://leetcode.com/problems/binary-search-tree-iterator/");
});
