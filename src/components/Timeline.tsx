
import React from "react";
import TimelineItem from "./TimelineItem";

const timelineData = [
  {
    organization: "BASE Life Science",
    color: "green",
    startDate: "Sept 2022",
    endDate: "Present",
    description: "Working on innovative healthcare technology solutions. Collaborated with cross-functional teams to develop digital health platforms for pharmaceutical clients.",
  },
  {
    organization: "DTU",
    color: "blue",
    startDate: "Sept 2020",
    endDate: "June 2022",
    description: "Master's degree in Computer Science at Technical University of Denmark. Focused on machine learning and data science, with courses in advanced algorithms and distributed systems.",
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
  {
    organization: "Prep school Champollion",
    color: "red",
    startDate: "Sept 2017",
    endDate: "June 2019",
    description: "Intensive preparatory program for engineering schools. Studied mathematics, physics, and computer science fundamentals with a rigorous curriculum.",
  },
];

const Timeline: React.FC = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Timeline</h2>
      <div className="flex flex-col items-center">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            organization={item.organization}
            color={item.color as "blue" | "green" | "yellow" | "red" | "gray"}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
