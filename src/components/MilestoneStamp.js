import React from "react";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { format, addDays } from "date-fns";

function MilestoneStamp({ label, value, achieved, startDate }) {
  const targetDate = addDays(new Date(startDate), value);
  const dateText = format(targetDate, "d MMM yyyy");
  const tooltipText = achieved
    ? `Achieved on ${dateText}`
    : `Expected on ${dateText}`;

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip>{tooltipText}</Tooltip>}
    >
      <Badge
        bg={achieved ? "success" : "light"}
        text={achieved ? "light" : "dark"}
        className="px-3 py-2 border"
        style={{
          fontSize: "1rem",
          opacity: achieved ? 1 : 0.6,
          borderRadius: "1rem",
          minWidth: "60px",
          textAlign: "center",
        }}
      >
        {label}
      </Badge>
    </OverlayTrigger>
  );
}

export default MilestoneStamp;
