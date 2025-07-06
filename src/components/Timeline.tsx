
import React, { useState } from "react";
import TimelineItem from "./TimelineItem";

// Split timeline data into professional and academic
const professionalData = [
  {
    organization: "BASE Life Science",
    title: "Junior Developer",
    startDate: "Jan 2025",
    endDate: "Present",
    description: "Working as a junior developer in the software developement team. Implementing features and correcting bugs in a software used by the consultants of the company.",
  },
  {
    organization: "Verimag",
    title: "Research Intern",
    startDate: "May 2024",
    endDate: "Aug 2024",
    description: "Research internship at the Verimag laboratory, simulating fault injections in a benchmark of C programs to test their resistance to these attacks.",
  },
  {
    organization: "Magasin General",
    title: "Seasonal worker",
    startDate: "June 2023",
    endDate: "Aug 2023",
    description: "Summer job at a local grocery store. Worked in every manual part of the business, from cashiering to receiving and storing deliveries, as well as re-stocking shelves and cleaning the shop.",
  },
];

const academicData = [
  {
    organization: "DTU",
    title: "MSc Student",
    startDate: "Sept 2024",
    endDate: "June 2026",
    description: "Master's degree in Computer Science at Technical University of Denmark. Focused on software engineering, with courses in machine learning and data science.",
  },
  {
    organization: "ENSTA",
    title: "Engineering Student (Masters Level)",
    startDate: "Sept 2022",
    endDate: "June 2024",
    description: "Engineering diploma in ENSTA, \"National Superior School of Advanced Techniques\". First year in general engineering, second year focused on computer science.",
  },
  {
    organization: "Prep school Champollion",
    title: "Student (Bachelor Level)",
    startDate: "Sept 2020",
    endDate: "June 2022",
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
          <div className="flex flex-col items-end">
            <h3 className="text-xl font-semibold mb-6 text-right">Professional</h3>
            <div className="flex flex-col items-end">
              {professionalData.map((item, index) => (
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
        
        {/* Academic Column */}
        <div className="flex gap-4 h-full">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-semibold mb-6">Academic</h3>
            <div className="flex flex-col items-start">
              {academicData.map((item, index) => (
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
