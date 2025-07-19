import { TimelineData } from "@/ts_interfaces/TimelineData"
import { Link } from "@/ts_interfaces/ItemData"

const proData: TimelineData =
{
  title: "Professional",
  itemDataArray: [
    {
      organization: "BASE Life Science",
      title: "Junior Developer",
      startDate: new Date("January, 2025"),
      endDate: null,
      description: "I currently work as a junior developer in the software developement team. My job is mostly directed towards  a software used by the consultants to perform data migrations. Concretely I implement requested features, correct bugs, write documentation and make changes to improve the user experience of the software.",
      relevantLinks: new Array<Link>(
        {placeHolder: "BASE Life Science Website", url: "https://www.baselifescience.com/"}, 
        {placeHolder: "LinkedIn Page", url: "https://www.linkedin.com/company/base-life-science/"}
      )
    },
    {
      organization: "Verimag",
      title: "Research Intern",
      startDate: new Date("May, 2024"),
      endDate: new Date("August, 2024"),
      description: "This was a 3 month-long research internship at the Verimag laboratory in Grenoble. My research dealt with simulating cyber-attacks on a benchmark of C programs. More precisely, he attacks simulated were fault-injection attacks, which occur for instance when targeting precisely some components of a computer chip with a laser. This may alter in-memory values, and allow the attacker to gain unwanted access to the component. To prevent this, the C programs contained a certain counter-measures with the test was supposed to evaluate the efficiency. Other than the technical skills this internship involved, I discovered the world of international research by meeting many international students who were also working at the lab.",
      relevantLinks: new Array<Link>({placeHolder: "Verimag Website", url: "https://www-verimag.imag.fr/?lang=en"})
    },
    {
      organization: "Magasin General",
      title: "Seasonal worker",
      startDate: new Date("June, 2023"),
      endDate: new Date("August, 2023"),
      description: "My first summer job, at a local grocery store. I worked in most non-administrative part of the business, from cashiering to receiving and storing deliveries, as well as re-stocking shelves and cleaning the shop. Even though this experience isn't related to computer science or software development, I have included it for I believe it helped me acquire some soft skills necessary to work in a team.",
      relevantLinks: new Array<Link>({placeHolder: "Magasin General Website", url: "https://www.magasin-general.coop/"})
    },
  ]
}
export default proData