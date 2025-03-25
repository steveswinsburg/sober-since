import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import { getSavedPrompt, setSavedPrompt } from "../utils/pwaPromptStore";

const InstallPWA = () => {
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    const prompt = getSavedPrompt();
    if (prompt) {
      setShowInstall(true);
    }

    const handler = (e) => {
      e.preventDefault();
      setSavedPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = () => {
    const prompt = getSavedPrompt();
    if (!prompt) return;

    prompt.prompt();
    prompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted PWA installation");
      }
      setSavedPrompt(null);
      setShowInstall(false);
    });
  };

  if (!showInstall) return null;

  return (
    <Button
      variant="outline-dark"
      onClick={handleInstall}
      title="Install App"
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid #ccc",
      }}
    >
      <Download size={20} />
    </Button>
  );
};

export default InstallPWA;
