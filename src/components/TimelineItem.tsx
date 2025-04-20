
import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  organization: string;
  color: "blue" | "green" | "yellow" | "red" | "gray";
  startDate: string;
  endDate: string;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
  align: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  organization,
  color,
  startDate,
  endDate,
  description,
  isExpanded,
  onClick,
  align,
}) => {
  return (
    <div className="mb-6 w-full max-w-xs">
      <div 
        className={cn(
          "timeline-container flex items-center gap-4",
          align === "right" ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div
          className={cn(
            "timeline-content-wrapper group cursor-pointer rounded-lg p-4 transition-all duration-300",
            "hover:bg-gray-100/70",
            isExpanded && "bg-gray-100/70",
            align === "right" ? "text-right" : "text-left"
          )}
          onClick={onClick}
        >
          <p className="font-medium">{organization}</p>
          <div className={cn(
            "overflow-hidden transition-all duration-300",
            isExpanded ? "mt-2 max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}>
            <p className="font-medium mb-2">{startDate} - {endDate}</p>
            <p>{description}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={cn("timeline-dot w-5 h-5 rounded-full", `bg-timeline-${color}`)} />
          <div 
            className={cn(
              "timeline-line w-1.5 rounded-full mx-auto transition-all duration-300",
              `bg-timeline-${color}`,
              isExpanded ? "h-32" : "h-12"
            )} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
