import React from "react";
import MilestoneStamp from "./MilestoneStamp";

const MILESTONES = [
  { label: "5d", value: 5 },
  { label: "10d", value: 10 },
  { label: "15d", value: 15 },
  { label: "20d", value: 20 },
  { label: "25d", value: 25 },
  { label: "30d", value: 30 },
  { label: "6w", value: 42 },
  { label: "8w", value: 56 },
  { label: "2m", value: 60 },
  { label: "3m", value: 90 },
  { label: "6m", value: 180 },
  { label: "1y", value: 365 },
];

function MilestoneStampCard({ daysSober, startDate }) {
  return (
    <div
      className="mt-4 px-4 py-3"
      style={{
        background: "#eef2f7", // more contrast with white
        borderRadius: "1.25rem",
        border: "1px solid #d0d7df",
        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
      }}
    >
      <h6 className="text-center text-muted mb-3">My progress</h6>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {MILESTONES.map((milestone) => {
          const achieved = daysSober >= milestone.value;
          return (
            <MilestoneStamp
              key={milestone.value}
              label={milestone.label}
              value={milestone.value}
              achieved={achieved}
              startDate={startDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MilestoneStampCard;
