import React from "react";
import ReactDOM from "react-dom";
import StoryList from "./containers/StoryList";

const items = [
  {
    id: 123,
    rank: 1,
    title: "How to build a simple HackerNews feed with styled-components",
    url:
      "http://www.andreasreiterer.at/web-development/styled-components-hackernews-feed/",
    time: "1507576048"
  },
  {
    id: 124,
    rank: 2,
    title: "React Functional Components vs. Class Components",
    url:
      "http://www.andreasreiterer.at/web-development/react-functional-components/",
      time: "1507576048"
  },
  {
    id: 125,
    rank: 3,
    title: "Validating Props easily with React PropTypes",
    url:
      "http://www.andreasreiterer.at/web-development/react-proptypes/",
      time: "1507576048"
  }
];

ReactDOM.render(<StoryList items={items} />, document.getElementById("App"));
