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
  { label: "7w", value: 49 },
  { label: "8w", value: 56 },
  { label: "2m", value: 60 },
  { label: "3m", value: 90 },
  { label: "6m", value: 180 },
  { label: "9m", value: 270 },
  { label: "1y", value: 365 },
  { label: "2y", value: 730 },
];

function MilestoneStampCard({ daysSober }) {
  return (
    <div
      className="d-flex flex-wrap justify-content-center gap-2 mt-4"
      style={{ paddingBottom: "4rem" }}
    >
      {MILESTONES.map((milestone) => {
        const achieved = daysSober >= milestone.value;

        return (
          <MilestoneStamp 
            key={milestone.value}
            label={milestone.label} 
            achieved={achieved} 
          />
        );
      })}
    </div>
  );
}

export default MilestoneStampCard;
