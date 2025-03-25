import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const TODAYS_DATE = new Date().toISOString().split("T")[0];

function ConfigurationScreen() {
  const navigate = useNavigate();
  const [sinceDate, setSinceDate] = useState(localStorage.getItem("sinceDate") || TODAYS_DATE);

  const handleSave = () => {

    // save date
    localStorage.setItem("sinceDate", sinceDate);
    navigate(-1); // Go back
  };

  return (
    <Container className="mt-3">
      <Header title="Configuration">
        <Button variant="link" onClick={() => navigate(-1)}>Back</Button>
      </Header>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="start-date">Start Date</Form.Label>
          <Form.Control
            id="start-date"
            type="date"
            value={sinceDate}
            onChange={(e) => setSinceDate(e.target.value)}
            max={TODAYS_DATE}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Form>
    </Container>
  );
}

export default ConfigurationScreen;