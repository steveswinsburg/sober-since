import React from "react";
import { Card } from "react-bootstrap";

function DaysSoberCard({ days }) {
  return (
    <Card
      className="mt-5 p-4 text-white"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        borderRadius: "1rem",
      }}
    >
      <h1 className="display-3">{days}</h1>
      <p className="lead">days sober</p>
    </Card>
  );
}

export default DaysSoberCard;
