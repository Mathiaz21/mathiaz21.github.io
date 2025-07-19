import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import { TimelineData } from "@/ts_interfaces/TimelineData";
import ItemCard from "./ItemCard";


const Timeline: React.FC<TimelineData> = ({title, itemDataArray}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    if (expandedIndex === itemId) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(itemId);
    }
  };
  return (
    // TODO: make it possible to toggle between both columns, make it possible to add more different timelines
    // For instance a Timeline for student clubs or past projects that weren't on GitHub, such as the Dragon's 
    // game I made with Marc, or the TKinter processor simulator
    <section className="my-10 w-full max-w-2xl px-2">
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="flex flex-col items-center">
        {itemDataArray.map((item, index) => (
          <TimelineItem
            key={`academic-${index}`}
            organization={item.organization}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            isExpanded={expandedIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      {(expandedIndex !== null) &&
        // TODO: finish to center the div vertically
        <div className="absolute right-3 top-1/2">
        <ItemCard
          organization={itemDataArray[expandedIndex].organization}
          title={itemDataArray[expandedIndex].title}
          startDate={itemDataArray[expandedIndex].startDate}
          endDate={itemDataArray[expandedIndex].endDate}
          description={itemDataArray[expandedIndex].description}
        />
        </div>
      }
    </section>
  );
};

export default Timeline;