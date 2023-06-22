import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { getQuestionById } from "./util";

const openInNewWindow = (url?: string) => {
  if (url) window.open(url, "_blank");
};

const Popup: FC = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="container">
      <div className="banner">
        <span className="title">LeetCode Finder</span>
        <span className="caption">
          Jump to a question by typing its question number.
        </span>
      </div>
      <form
        className="question-form"
        onSubmit={(e) => {
          openInNewWindow(getQuestionById(query));
          e.preventDefault();
        }}
      >
        <span className="row">
          <input
            className="question-input"
            autoFocus
            placeholder="Input question number"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="icon-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
            </svg>
          </button>
        </span>
      </form>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
