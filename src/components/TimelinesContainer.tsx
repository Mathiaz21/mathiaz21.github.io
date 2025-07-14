import React, { useState} from "react"
import Timeline from "./Timeline"
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import academicMilestones from "@/data/academicMilestones";
import proMilestones from "@/data/proMilestones";



const TimelinesContainer: React.FC = () => {

  const iconSize = "4x"
  const iconColor = "grey"

  const [timelineId, setTimelineId] = useState<number>(0)
  const timelines = [academicMilestones, proMilestones]
  const numberOfTimelines: number = timelines.length

  const handleArrowClick = (timelineId: number, direction: string) => {
    if (direction == "right") {
      setTimelineId(timelineId == numberOfTimelines-1 ? 0 : timelineId+1)
    } else {
      setTimelineId(timelineId == 0 ? numberOfTimelines-1  : timelineId-1)
    }
  }

  return (
    <div className="flex mx-auto">
      <div className="flex flex-col justify-center">
        <FontAwesomeIcon icon={faChevronLeft} size={iconSize} color={iconColor}/>
      </div>
      <div className="my-10 w-full max-w-2xl px-3">
        <h2 className="text-2xl font-bold text-center mb-10">My Timelines</h2>
        <div className="absolute left-0 back"></div>
        <Timeline academicMilestones={timelines[timelineId]}/>
      </div>
      <div className="flex flex-col justify-center">
        <FontAwesomeIcon icon={faChevronRight} size={iconSize} color={iconColor}/>
      </div>
    </div>
  )
}

export default TimelinesContainer