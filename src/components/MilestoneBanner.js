import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

function MilestoneBanner({ milestoneMessage }) {
  const [visible, setVisible] = useState(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (milestoneMessage) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false); // triggers CSS transition
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [milestoneMessage]);

  if (!milestoneMessage) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width,
          height,
          pointerEvents: "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 2s ease",
          zIndex: 9999,
        }}
      >
        <Confetti width={width} height={height} />
      </div>

      <Alert variant="success" className="mt-4">
        🎊 <strong>{milestoneMessage}</strong>
      </Alert>
    </>
  );
}

export default MilestoneBanner;
