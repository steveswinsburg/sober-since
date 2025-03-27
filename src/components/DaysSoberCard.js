import React from "react";
import { Card } from "react-bootstrap";

function DaysSoberCard({ days }) {
  return (
    <Card
      className="mt-5 p-5 text-white shadow-lg"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        borderRadius: "1.5rem",
      }}
    >
      <h1 className="display-1 fw-bold mb-2">{days}</h1>
      <p className="lead fs-3">days sober</p>
    </Card>
  );
}

export default DaysSoberCard;
