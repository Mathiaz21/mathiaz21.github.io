
import React, { useState } from "react";
import TimelineItem from "./TimelineItem";

// Split timeline data into professional and academic
const professionalData = [
  {
    organization: "BASE Life Science",
    color: "green",
    startDate: "Sept 2022",
    endDate: "Present",
    description: "Working on innovative healthcare technology solutions. Collaborated with cross-functional teams to develop digital health platforms for pharmaceutical clients.",
  },
  {
    organization: "Verimag",
    color: "gray",
    startDate: "May 2020",
    endDate: "Aug 2020",
    description: "Research internship at the Verimag laboratory, working on formal verification methods for embedded systems and contributing to academic publications.",
  },
  {
    organization: "Magasin General",
    color: "yellow",
    startDate: "June 2019",
    endDate: "Aug 2019",
    description: "Summer internship developing web applications and improving internal systems. Gained hands-on experience with modern web technologies and agile development practices.",
  },
];

const academicData = [
  {
    organization: "DTU",
    color: "blue",
    startDate: "Sept 2020",
    endDate: "June 2022",
    description: "Master's degree in Computer Science at Technical University of Denmark. Focused on machine learning and data science, with courses in advanced algorithms and distributed systems.",
  },
  {
    organization: "Prep school Champollion",
    color: "red",
    startDate: "Sept 2017",
    endDate: "June 2019",
    description: "Intensive preparatory program for engineering schools. Studied mathematics, physics, and computer science fundamentals with a rigorous curriculum.",
  },
];

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
    <section className="my-10 w-full max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-10">My Timeline</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Professional Column */}
        <div className="flex flex-col items-end">
          <h3 className="text-xl font-semibold mb-6 text-right">Professional</h3>
          <div className="flex flex-col items-end">
            {professionalData.map((item, index) => (
              <TimelineItem
                key={`professional-${index}`}
                organization={item.organization}
                color={item.color as "blue" | "green" | "yellow" | "red" | "gray"}
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
        
        {/* Academic Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-6">Academic</h3>
          <div className="flex flex-col items-start">
            {academicData.map((item, index) => (
              <TimelineItem
                key={`academic-${index}`}
                organization={item.organization}
                color={item.color as "blue" | "green" | "yellow" | "red" | "gray"}
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
    </section>
  );
};

export default Timeline;
