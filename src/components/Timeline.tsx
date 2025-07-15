import React, { useState } from "react";
import TimelineItem, {TimelineItemProps} from "./TimelineItem";


const Timeline: React.FC = ({timelineData}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };
  console.log(timelineData)
  return (
    // TODO: make it possible to toggle between both columns, make it possible to add more different timelines
    // For instance a Timeline for student clubs or past projects that weren't on GitHub, such as the Dragon's 
    // game I made with Marc, or the TKinter processor simulator
    <section className="my-10 w-full max-w-2xl px-2">
      <h3 className="text-xl font-semibold mb-6 text-center">Academic</h3>
      <div className="flex flex-col items-center">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={`academic-${index}`}
            organization={item.organization}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            isExpanded={expandedItem === `academic-${index}`}
            onClick={() => handleItemClick(`academic-${index}`)}
            align="left"
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
