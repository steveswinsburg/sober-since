import React, { useEffect, useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Gear } from "react-bootstrap-icons";

import Header from "../components/Header";
import DaysSoberCard from "../components/DaysSoberCard";
import MilestoneBanner from "../components/MilestoneBanner";
import Footer from "../components/Footer";
import MilestoneStampCard from "../components/MilestoneStampCard";

import { getStartDate, calculateDaysSober, getMilestoneMessage } from "../utils/appUtils";


function HomeScreen() {
  const navigate = useNavigate();
  const [startDate, setStartDateState] = useState(null);
  const [daysSober, setDaysSoberState] = useState(null);
  const [milestoneMessage, setMilestoneMessageState] = useState(null);
  
  useEffect(() => {
    const savedDateStr = getStartDate();
    if (savedDateStr) {
      const savedDate = new Date(savedDateStr);
      setStartDateState(savedDate);

      const days = calculateDaysSober(savedDate);
      setDaysSoberState(days);

      const milestoneMessage = getMilestoneMessage(days);
      if (milestoneMessage) setMilestoneMessageState(milestoneMessage);
    }
  }, []);

  return (
    <Container className="mt-4 text-center position-relative">
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
        <>
          <DaysSoberCard days={daysSober} />
          <MilestoneBanner milestoneMessage={milestoneMessage} />
          <MilestoneStampCard daysSober={daysSober} startDate={startDate} />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default HomeScreen;
