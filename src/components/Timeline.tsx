
import React, { useState } from "react";
import TimelineItem from "./TimelineItem";

// Split timeline data into professional and academic
const professionalData = [
  {
    organization: "BASE Life Science",
    title: "Junior Developer",
    color: "green",
    startDate: "Sept 2022",
    endDate: "Present",
    description: "Working as a junior developer in the software developement team. Implementing features and correcting bugs in a software used by the consultants of the company.",
  },
  {
    organization: "Verimag",
    title: "Research Intern",
    color: "gray",
    startDate: "May 2020",
    endDate: "Aug 2020",
    description: "Research internship at the Verimag laboratory, simulating fault injections in a benchmark of C programs to test their resistance to these attacks.",
  },
  {
    organization: "Magasin General",
    title: "Seasonal worker",
    color: "yellow",
    startDate: "June 2019",
    endDate: "Aug 2019",
    description: "Summer job at a local grocery store. Worked in every manual part of the business, from cashiering to receiving and storing deliveries, as well as re-stocking shelves and cleaning the shop.",
  },
];

const academicData = [
  {
    organization: "DTU",
    title: "MSc Student",
    color: "blue",
    startDate: "Sept 2024",
    endDate: "June 2026",
    description: "Master's degree in Computer Science at Technical University of Denmark. Focused on software engineering, with courses in machine learning and data science.",
  },
  {
    organization: "ENSTA",
    title: "Engineering Student (Masters Level)",
    color: "blue",
    startDate: "Sept 2022",
    endDate: "June 2024",
    description: "Engineering diploma in ENSTA, \"National Superior School of Advanced Techniques\". First year in general engineering, second year focused on computer science.",
  },
  {
    organization: "Prep school Champollion",
    title: "Student (Bachelor Level)",
    color: "red",
    startDate: "Sept 2017",
    endDate: "June 2019",
    description: "Intensive preparatory program for entering French engineering schools. Studied mathematics, physics, and computer science fundamentals with a rigorous curriculum.",
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
      
      <div className="flex justify-center gap-12">
        {/* Professional Column */}
        <div className="flex gap-4 h-full">
          {/* Professional Content */}
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-6 text-right">Professional</h3>
            <div className="flex flex-col items-end">
              {professionalData.map((item, index) => (
                <TimelineItem
                  key={`professional-${index}`}
                  organization={item.organization}
                  title={item.title}
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

          {/* Professional timeline bar */}
          <div className="relative h-full">
            <div className="w-1.5 bg-gray-200 rounded-full absolute inset-y-16 left-0">
              {professionalData.map((item, index) => (
                <div
                  key={`dot-professional-${index}`}
                  className={`absolute w-5 h-5 -left-1.5 rounded-full transition-all duration-300`}
                  style={{
                    top: `${index * 150}px`,
                    backgroundColor: `var(--timeline-${item.color})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Academic Column */}
        <div className="flex gap-4 h-full">
          {/* Academic timeline bar */}
          <div className="relative h-full">
            <div className="w-1.5 bg-gray-200 rounded-full absolute inset-y-16 left-0">
              {academicData.map((item, index) => (
                <div
                  key={`dot-academic-${index}`}
                  className={`absolute w-5 h-5 -left-1.5 rounded-full transition-all duration-300`}
                  style={{
                    top: `${index * 150}px`,
                    backgroundColor: `var(--timeline-${item.color})`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Academic Content */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-6">Academic</h3>
            <div className="flex flex-col items-start">
              {academicData.map((item, index) => (
                <TimelineItem
                  key={`academic-${index}`}
                  organization={item.organization}
                  title={item.title}
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
      </div>
    </section>
  );
};

export default Timeline;
