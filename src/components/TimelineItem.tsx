
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface TimelineItemProps {
  organization: string;
  title: string;
  startDate: Date;
  endDate: Date | void;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
  align: "left" | "right";
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  organization,
  title,
  startDate,
  endDate,
  description,
  isExpanded,
  onClick,
  align,
}) => {

  const dateParseOptions: object = {
    month: "short",
    year: "numeric"
  }
  const startDateStr: string = startDate.toLocaleDateString("en-US", dateParseOptions)
  const endDateStr: string = endDate ? endDate.toLocaleDateString("en-US", dateParseOptions) : "Present"

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
            !isExpanded && "hover:bg-gray-100/70",
            isExpanded && "bg-gray-100",
            align === "right" ? "text-right" : "text-left"
          )}
          onClick={onClick}
        >
          <div>
            <p className="font-medium">{organization}</p>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-sm text-gray-600 mb-2">{startDateStr} - {endDateStr}</p>
          </div>
          <div className={cn(
            "overflow-hidden transition-all duration-300",
            isExpanded ? "mt-2 max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}>
            <Separator className="my-2 h-[2px] bg-gray-300" />
            <p>{description}</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center">
          <div className={cn("timeline-dot w-5 h-5 rounded-full")} />
          <div 
            className={cn(
              "timeline-line w-1.5 rounded-full mx-auto transition-all duration-300",
              isExpanded ? "h-32" : "h-12"
            )} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
