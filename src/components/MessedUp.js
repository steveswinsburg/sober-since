import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { getTodaysDate, setStartDate } from "../utils/appUtils";

function MessedUp() {
  const [show, setShow] = useState(false);

  const handleConfirm = () => {
    const todayStr = getTodaysDate();
    setStartDate(todayStr);
    window.location.reload();
  };

  return (
    <>
      <Button
        variant="outline-danger"
        className="position-fixed bottom-0 start-0 m-3"
        onClick={() => setShow(true)}
      >
        I messed up
      </Button>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>It's OK ❤️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Let's get you back on track. We'll restart your sobriety from today.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Restart from Today
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MessedUp;
