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
  const [daysSober, setDaysSober] = useState(null);
  const [milestone, setMilestone] = useState(null);
  
  useEffect(() => {
    const savedDate = getStartDate();
    if (savedDate) {
      setStartDateState(savedDate);
      const days = calculateDaysSober(savedDate);
      setDaysSober(days);
      const milestoneMsg = getMilestoneMessage(days);
      if (milestoneMsg) setMilestone(milestoneMsg);
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
          <MilestoneBanner milestone={milestone} />
          <MilestoneStampCard daysSober={daysSober} />
        </>
      )}
      <Footer />
    </Container>
  );
}

export default HomeScreen;
