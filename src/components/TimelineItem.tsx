import { ItemProps } from "@/ts_interfaces/ItemProps";
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";


// TODO: make this item more customizable, so that it is for instance possible to 
// add in fields specific to a timeline (for instance for races it should be possible
// to add distance, time, ranking fields)


const TimelineItem: React.FC<ItemProps> = ({
  organization,
  title,
  startDate,
  endDate,
  isExpanded,
  onClick,
}) => {

  const dateParseOptions: object = {
    month: "short",
    year: "numeric"
  }
  const startDateStr: string = startDate.toLocaleDateString("en-US", dateParseOptions)
  const endDateStr: string = endDate ? endDate.toLocaleDateString("en-US", dateParseOptions) : "Present"

  return (
    <div
      className={cn(
        "timeline-container flex items-center gap-4 mb-6 w-full",
        "cursor-pointer rounded-lg p-4 transition-all duration-300 border-2",
        "hover:shadow-xl hover:bg-white/30 border-gray-100/10",
        isExpanded && "border-white",
      )}
      onClick={onClick}
    >
      <div>
        <p className="font-medium">{organization}</p>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-sm text-gray-600 mb-2">{startDateStr} - {endDateStr}</p>
      </div>
    </div>
  );
};

export default TimelineItem;