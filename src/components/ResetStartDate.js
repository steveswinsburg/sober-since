import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getTodaysDate, setStartDate } from "../utils/appUtils";

function ResetStartDate() {
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    const todayStr = getTodaysDate();
    setStartDate(todayStr);
    setShow(false);
    window.location.reload();
  };

  return (
    <>
      <Button variant="outline-light" className="mt-3" onClick={() => setShow(true)}>
        I messed up
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>It's OK ❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Let's get you back on track. We'll restart your journey from today.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirm}>Restart from today</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ResetStartDate;
