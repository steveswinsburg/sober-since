import React from "react";
import { Badge } from "react-bootstrap";

function MilestoneStamp({ label, achieved }) {
    
  return (
    <Badge
        bg={achieved ? "success" : "secondary"}
        className="px-3 py-2"
        style={{
            fontSize: "1rem",
            opacity: achieved ? 1 : 0.4,
            borderRadius: "1rem",
            minWidth: "60px",
            textAlign: "center",
        }}
    >
    {label}
    </Badge>
);

}

export default MilestoneStamp;
