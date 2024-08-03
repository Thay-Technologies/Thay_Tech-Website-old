import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
        </Routes>
      </div>
    </Router>
  );
};

export default App;