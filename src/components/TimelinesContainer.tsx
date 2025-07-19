import React, { useState} from "react"
import Timeline from "./Timeline"
import { TimelineData } from "@/ts_interfaces/TimelineData"
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import academiaData from "@/data/academiaData";
import proData from "@/data/proData";




const TimelinesContainer: React.FC = () => {

  const iconSize = "4x"
  const iconColor = "grey"

  const [timelineId, setTimelineId] = useState<number>(0)
  const timelines: Array<TimelineData> = [academiaData, proData]
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
      <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleArrowClick(timelineId, "left")}>
        <FontAwesomeIcon icon={faChevronLeft} size={iconSize} color={iconColor}/>
      </div>
      <div className="my-10 w-full max-w-2xl px-3">
        <h2 className="text-2xl font-bold text-center mb-10">My Timelines</h2>
        <div className="absolute left-0 back"></div>
        <Timeline title={timelines[timelineId].title} itemDataArray={timelines[timelineId].itemDataArray}/>
      </div>
      <div className="flex flex-col justify-center cursor-pointer" onClick={() => handleArrowClick(timelineId, "right")}>
        <FontAwesomeIcon icon={faChevronRight} size={iconSize} color={iconColor}/>
      </div>
    </div>
  )
}

export default TimelinesContainer