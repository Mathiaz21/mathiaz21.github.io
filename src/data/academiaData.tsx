import { TimelineData } from "@/ts_interfaces/TimelineData";
import { Link } from "@/ts_interfaces/ItemData";
const academiaData: TimelineData = {
  title: "Academia",
  itemDataArray: 
  [
    {
      organization: "DTU",
      title: "MSc Student",
      startDate: new Date("September, 2024"),
      endDate: new Date("June, 2026"),
      description: "This master's degree in Computer Science at Technical University of Denmark will end my studies. It is focused on software engineering, with courses of machine learning and data science. Appart the technical skills I am learning, living in Copenhagen has been the opportunity for me to discover a new way of learning, a new culture and has introduced me to life in an international context.",
      relevantLinks: new Array<Link>({placeHolder: "DTU Website", url: "https://www.dtu.dk/english/"})
    },
    {
      organization: "ENSTA Paris",
      title: "Engineering Student (Masters Level)",
      startDate: new Date("September, 2022"),
      endDate: new Date("June, 2024"),
      description: "For 2 years, I have studied to get an engineering diploma in ENSTA, the \"National Superior School of Advanced Techniques\". My first year was general engineering which comprised maths, solid and fluid material engineering as well as some computer science. In my second year I chose to focus solely on computer science.",
      relevantLinks: new Array<Link>({placeHolder: "ENSTA Website", url: "https://www.ensta-paris.fr/en/node"})
    },
    {
      organization: "Prep school Champollion",
      title: "Student (Bachelor Level)",
      startDate: new Date("September, 2020"),
      endDate: new Date("June, 2022"),
      description: "I took a 2 years intensive preparatory program, with the objective of entering a French engineering school. I studied mathematics, physics, and computer science fundamentals with a rigorous curriculum. From what I understood, this type of studies is unique to France. During 2 years students study to pass a contest that takes place in the whole of France. This contest (\"Concours des Grandes Ecoles\") last about 2 months, comprises written and oral exams and ranks students. This ranking is used to determine which student may have access to the most prestigious French engineering schools.",
      relevantLinks: new Array<Link>({placeHolder: "Champollion School Website", url: "https://lycee-champollion.fr/"})
    },
  ]
};

export default academiaData