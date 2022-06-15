import React from "react";
import MyContextProvider from "../../context/Context";
import "../../styles/App.css";
import Home from "./Home.jsx";

function App() {
  return (
    <MyContextProvider>
      <Home />
    </MyContextProvider>
  );
}

export default App;
