// main.jsx
// This is the ENTRY POINT of the React application
// It connects our React app to the actual HTML page (index.html)

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Find the <div id="root"> in index.html and mount our App inside it
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
