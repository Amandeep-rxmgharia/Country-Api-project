import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import "./App.css";
import { use, useState } from "react";
import ThemeProvider, { ThemeContext } from "./contexts/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
