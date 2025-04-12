
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  organization: string;
  color: "blue" | "green" | "yellow" | "red" | "gray";
  startDate: string;
  endDate: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  organization,
  color,
  startDate,
  endDate,
  description,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2">
      <div className="timeline-container" onClick={toggleExpand}>
        <div className="text-right w-40">
          <p className="font-medium">{organization}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className={cn("timeline-dot", `bg-timeline-${color}`)} />
          {color !== "red" && <div className={cn("timeline-line", `bg-timeline-${color}`)} />}
        </div>
      </div>
      <div className={cn("timeline-details", expanded && "expanded")}>
        <p className="font-medium mb-1">{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
