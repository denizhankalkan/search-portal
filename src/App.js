import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Containers/HomePage/index";

const App = () => {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
