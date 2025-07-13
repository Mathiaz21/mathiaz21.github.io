import React, { useState } from "react";
import TimelineItem from "./TimelineItem";
import academicMilestones from "@/data/academicMilesones";
import proMilestones from "@/data/proMilestones";

// Split timeline data into professional and academic



const Timeline: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    // TODO: make it possible to toggle between both columns, make it possible to add more different timelines
    // For instance a Timeline for student clubs or past projects that weren't on GitHub, such as the Dragon's 
    // game I made with Marc, or the TKinter processor simulator
    <section className="my-10 w-full max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">My Timelines</h2>
      
      <div className="flex justify-center gap-12">
        <div className="flex gap-4 h-full">
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-6 text-right">Professional</h3>
            <div className="flex flex-col items-end">
              {proMilestones.map((item, index) => (
                <TimelineItem
                  key={`professional-${index}`}
                  organization={item.organization}
                  title={item.title}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  description={item.description}
                  isExpanded={expandedItem === `professional-${index}`}
                  onClick={() => handleItemClick(`professional-${index}`)}
                  align="right"
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 h-full">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-6">Academic</h3>
            <div className="flex flex-col items-start">
              {academicMilestones.map((item, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
