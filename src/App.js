import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ConfigurationScreen from "./screens/ConfigurationScreen";
import { setSavedPrompt } from "./utils/pwaPromptStore";

function App() {

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSavedPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/config" element={<ConfigurationScreen />} />
      </Routes>
    </Router>
  );
}

export default App;