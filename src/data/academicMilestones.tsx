import { TimelineData } from "@/ts_interfaces/TimelineData";

const academicMilestones: TimelineData = {
  title: "Academia",
  itemDataArray: 
  [
    {
      organization: "DTU",
      title: "MSc Student",
      startDate: new Date("September, 2025"),
      endDate: new Date("June, 2025"),
      description: "Master's degree in Computer Science at Technical University of Denmark. Focused on software engineering, with courses in machine learning and data science.",
    },
    {
      organization: "ENSTA",
      title: "Engineering Student (Masters Level)",
      startDate: new Date("September, 2022"),
      endDate: new Date("June, 2024"),
      description: "Engineering diploma in ENSTA, \"National Superior School of Advanced Techniques\". First year in general engineering, second year focused on computer science.",
    },
    {
      organization: "Prep school Champollion",
      title: "Student (Bachelor Level)",
      startDate: new Date("September, 2020"),
      endDate: new Date("June, 2022"),
      description: "Intensive preparatory program for entering French engineering schools. Studied mathematics, physics, and computer science fundamentals with a rigorous curriculum.",
    },
  ]
};

export default academicMilestones