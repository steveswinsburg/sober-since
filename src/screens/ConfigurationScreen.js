import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { getTodaysDate } from "../utils/appUtils";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB"; // For DD/MM/YYYY

registerLocale("en-GB", enGB);

function ConfigurationScreen() {
  const navigate = useNavigate();

  const storedDateStr = localStorage.getItem("sinceDate");
  const initialDateStr = storedDateStr || getTodaysDate();
  const initialDate = new Date(initialDateStr);

  const [startDate, setStartDate] = useState(initialDate);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSave = () => {
    const todayStr = getTodaysDate();
    const inputStr = startDate.toISOString().split("T")[0];

    if (inputStr > todayStr) {
      setIsInvalid(true);
      return;
    }

    localStorage.setItem("sinceDate", inputStr);
    navigate(-1);
  };

  return (
    <Container className="mt-3">
      <Header title="Configuration">
        <Button variant="link" onClick={() => navigate(-1)}>Back</Button>
      </Header>

      <Form>
  <Form.Group className="mb-3 d-flex align-items-center gap-3">
    <Form.Label className="mb-0" style={{ minWidth: "100px" }}>Start Date</Form.Label>
    <div style={{ flex: 1 }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setIsInvalid(false);
        }}
        dateFormat="dd/MM/yyyy"
        locale="en-GB"
        maxDate={new Date()}
        className={`form-control ${isInvalid ? "is-invalid" : ""}`}
        placeholderText="Select your start date"
      />
      {isInvalid && (
        <Form.Control.Feedback type="invalid" className="d-block">
          Please select a valid date (today or earlier).
        </Form.Control.Feedback>
      )}
    </div>
  </Form.Group>

  <Button variant="primary" onClick={handleSave}>
    Save
  </Button>
</Form>
    </Container>
  );
}

export default ConfigurationScreen;
