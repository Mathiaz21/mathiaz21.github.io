import { TimelineData } from "@/ts_interfaces/TimelineData"
import { Link } from "@/ts_interfaces/ItemData"

const hackathonData: TimelineData =
{
  title: "Hackathons",
  itemDataArray: [
    {
      organization: "MIT Hack-Nation",
      title: "Participant",
      startDate: new Date("August, 2025"),
      endDate: new Date("August, 2025"),
      description: "For 24 hours starting on August, 9th, I participated with 3 other fellow students to this fully online hackathon. We developped Coach Stephane, a 24/7 coach for runners. It drafts running training plans as well as offers real-time running advice using the speed and the heartrate of the runner. Our app was built using React Native and Expo for the frontend, and we use Python FastAPI for the backend. We used ElevenLabs' conversational agents for our coach.",
      relevantLinks: new Array<Link>(
        {placeHolder: "MIT Hack-Nation Website", url: "https://hack-nation.ai/"},
      )
    },
    {
      organization: "Antler x Supabase",
      title: "Participant",
      startDate: new Date("April, 2025"),
      endDate: new Date("April, 2025"),
      description: "From Friday, April 9th to Saturday, April 10th, I participated in this hackathon hosted by Antler and Supabase, at Bloxhub in Copenhagen. We developed a full-stack web-app that lets HR managers upload compliance documentation, and generates quizzes to test employees' knowledge of the content. It was during this event that I discovered Lovable and Supabase.",
      relevantLinks: new Array<Link>(
        {placeHolder: "Hackathon Website", url: "https://antlersupabasehackathon.dev/"},
        {placeHolder: "Supabase", url: "https://supabase.com/"},
      )
    },
    {
      organization: "Valhacks 2024",
      title: "3rd Place Finalist",
      startDate: new Date("April, 2025"),
      endDate: new Date("April, 2025"),
      description: "This one was a one-day hackathon that took place on April 16th, and it was co-organized by Accenture and Best.",
      relevantLinks: new Array<Link>(
        {placeHolder: "My LinkedIn post", url: "https://www.linkedin.com/posts/mathias-gilbert_version-fran%C3%A7aise-ci-dessous-3rd-place-activity-7269983798929326080-rsEj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEEP0yUB3Ps7UhgtSsqCSz339IaUWmekL-g"},
        {placeHolder: "Hackathon Website", url: "https://best.dtu.dk/valhacks/"},
      )
    }
  ]
}
export default hackathonData