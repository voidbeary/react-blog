import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { posts as postsMocked } from "./posts.js";

if (process.env.REACT_APP_USE_MOCK_POSTS === "true") {
  localStorage.setItem("posts", JSON.stringify(postsMocked));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
