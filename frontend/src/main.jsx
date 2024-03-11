import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import GlobalStyle from "./styles/globalStyle.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <GlobalStyle />
  </>,
)