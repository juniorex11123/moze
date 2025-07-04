import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import TimeTrackingApp from "./components/TimeTrackingApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app" element={<TimeTrackingApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;