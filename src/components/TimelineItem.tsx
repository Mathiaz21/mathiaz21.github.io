
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
          "timeline-container flex items-center gap-4 cursor-pointer transition-all duration-300 ease-in-out",
          align === "right" ? "flex-row-reverse" : "flex-row"
        )} 
        onClick={onClick}
      >
        <div className={cn(
          "w-40",
          align === "right" ? "text-right" : "text-left"
        )}>
          <p className="font-medium">{organization}</p>
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
      
      <div className={cn(
        "timeline-details p-4 bg-white/50 rounded-md shadow-sm transition-all duration-300 mt-2",
        align === "right" ? "mr-12" : "ml-12",
        isExpanded 
          ? "opacity-100 max-h-72 translate-y-0" 
          : "opacity-0 max-h-0 translate-y-4 overflow-hidden p-0"
      )}>
        <p className="font-medium mb-2">{startDate} - {endDate}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
