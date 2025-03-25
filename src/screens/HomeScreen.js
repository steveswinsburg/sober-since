import React, { useEffect, useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";
import Header from "../components/Header";
import DaysSoberCard from "../components/DaysSoberCard";

function HomeScreen() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(null);
  const [daysSober, setDaysSober] = useState(null);

  useEffect(() => {
    const savedDate = localStorage.getItem("sinceDate");
    setStartDate(savedDate);

    if (savedDate) {
      const start = new Date(savedDate);
      const today = new Date();
      const diffTime = today - start;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      setDaysSober(diffDays);
    }
  }, []);

  return (
    <Container className="mt-4 text-center">
      <Header title="Sober Since">
        <Button variant="link" onClick={() => navigate("/config")}>
          <Gear size={24} />
        </Button>
      </Header>

      {!startDate ? (
        <Alert variant="warning" className="mt-5">
          Welcome to <strong>Sober Since</strong>! Click the <Gear /> icon to get started.
        </Alert>
      ) : (
        <DaysSoberCard days={daysSober} />
      )}
    </Container>
  );
}

export default HomeScreen;
