import React from "react";
import ReactDOM from "react-dom";
import Story from "./components/Story";

const items = [
  {
    id: 123,
    rank: 1,
    title: "How to build a simple HackerNews feed with styled-components",
    url:
      "http://www.andreasreiterer.at/web-development/styled-components-hackernews-feed/"
  },
  {
    id: 124,
    rank: 2,
    title: "React Functional Components vs. Class Components",
    url:
      "http://www.andreasreiterer.at/web-development/react-functional-components/"
  },
  {
    id: 125,
    rank: 3,
    title: "Validating Props easily with React PropTypes",
    url:
      "http://www.andreasreiterer.at/web-development/react-proptypes/"
  }
];

ReactDOM.render(<StoryList items={items} />, document.getElementById("App"));
