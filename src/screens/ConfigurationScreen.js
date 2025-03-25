import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getTodaysDate } from "../utils/appUtils";

const TODAYS_DATE = getTodaysDate();

function ConfigurationScreen() {
  const navigate = useNavigate();
  const [sinceDate, setSinceDate] = useState(localStorage.getItem("sinceDate") || TODAYS_DATE);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateDate = (date) => {
    return date <= TODAYS_DATE;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSinceDate(value);
    setIsInvalid(!validateDate(value));
  };

  const handleSave = () => {
    if (!validateDate(sinceDate)) {
      setIsInvalid(true);
      return;
    }

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
            max={TODAYS_DATE}
            onChange={handleChange}
            isInvalid={isInvalid}
          />
           <Form.Control.Feedback type="invalid">
            Select a valid date (today or earlier).
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </Form>
    </Container>
  );
}

export default ConfigurationScreen;