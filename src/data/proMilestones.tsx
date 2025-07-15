import { TimelineProps } from "@/components/Timeline"

const proMilestones: TimelineProps =
{
  title: "Professional",
  itemProps: [
    {
      organization: "BASE Life Science",
      title: "Junior Developer",
      startDate: new Date("January, 2025"),
      endDate: null,
      description: "Working as a junior developer in the software developement team. Implementing features and correcting bugs in a software used by the consultants of the company.",
    },
    {
      organization: "Verimag",
      title: "Research Intern",
      startDate: new Date("May, 2024"),
      endDate: new Date("August, 2024"),
      description: "Research internship at the Verimag laboratory, simulating fault injections in a benchmark of C programs to test their resistance to these attacks.",
    },
    {
      organization: "Magasin General",
      title: "Seasonal worker",
      startDate: new Date("June, 2023"),
      endDate: new Date("August, 2023"),
      description: "Summer job at a local grocery store. Worked in every manual part of the business, from cashiering to receiving and storing deliveries, as well as re-stocking shelves and cleaning the shop.",
    },
  ]
}
export default proMilestones