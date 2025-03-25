import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ConfigurationScreen from "./screens/ConfigurationScreen";
import InstallPwa from "./utils/InstallPwa";

function App() {
  return (
    <Router>
      <InstallPwa />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/config" element={<ConfigurationScreen />} />
      </Routes>
    </Router>
  );
}

export default App;