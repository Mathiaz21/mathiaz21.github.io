import React from "react"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator";

interface RaceItemProps {
  name: string;
  date: Date;
  place: string;
  distance: number | string;
  runningTime: number;
  description: string;
  participants: number;
  myRanking: number;
  maleParticipants: number;
  myMaleRanking: number;
  onClick: () => void;
  isExpanded: boolean;
}


const RaceItem: React.FC<RaceItemProps> = ({
  name,
  date,
  distance,
  runningTime,
  description,
  participants,
  myRanking,
  maleParticipants,
  myMaleRanking,
  onClick,
  isExpanded,
}) => {
  return (
    <div className="mb-6 w-full max-w-2xl">
      <div 
        className={cn(
          "timeline-container flex items-center gap-4"
        )}
      >
        <div
          className={cn(
            "timeline-content-wrapper group cursor-pointer rounded-lg p-4 transition-all duration-300",
            !isExpanded && "hover:bg-gray-100/70",
            isExpanded && "bg-gray-100",
          )}
          onClick={onClick}
        >
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-gray-600">{date.toLocaleDateString()}</p>
            <p className="text-sm text-gray-600 mb-2">{distance}</p>
          </div>
          <div className={cn(
            "overflow-hidden transition-all duration-300",
            isExpanded ? "mt-2 max-h-72 opacity-100" : "max-h-0 opacity-0"
          )}>
            <Separator className="my-2 h-[2px] bg-gray-300" />
            <p>{description}</p>
          </div>

      </div>
    </div>
    </div>
  )
}

export default RaceItem