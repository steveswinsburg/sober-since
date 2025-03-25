import React from "react";
import { Alert } from "react-bootstrap";

function MilestoneBanner({ milestoneMessage }) {
  if (!milestoneMessage) {
    return null;
  }

  return (
    <Alert variant="success" className="mt-4">
      🎊 <strong>{milestoneMessage}</strong>
    </Alert>
  );
}

export default MilestoneBanner;
