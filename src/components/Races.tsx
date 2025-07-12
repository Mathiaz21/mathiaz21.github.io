import React, {useState} from "react";
import RaceItem from "./RaceItem";

const racesData0 = [
  {
    name: "Gladsaxe Lobet 2025",
    date: new Date("June 15, 2025"),
    place: "Soborg",
    distance: 10,
    runningTime: 41.1,
    description: "Two loops of 5k in a lovely green area in the North-West suburbs of Copenhagen. This race gathered few participants for another more important race took place on the same day: the half-marathon on the bridge connecting Denmark to Sweden, from Copenhagen to Malmo",
    participants: 58,
    myRanking: 6,
    maleParticipants: 38,
    myMaleRanking: 6,
  },
  {
    name: "Nike Spring Run 2025",
    date: new Date("March 9, 2025"),
    place: "Copenhagen",
    distance: "Half-Marathon",
    runningTime: 90.25,
    description: "Nice half-marathon in a park in the center of Copenhagen. The track was made of four loops of 5km followed by a portion of 1.2km. This day I set my PR for the half-marathon, but injured left knee and foot for I just came back from a week-long skiing trip with little sleep and hadn't fully recovered.",
    participants: 1426,
    myRanking: 253,
    maleParticipants: 1021,
    myMaleRanking: 241,
  }
]

const dataLocation: string = "@/data/races.json"
var rawJson = require(dataLocation)
const racesData = JSON.parse(rawJson)

const Races: React.FC = () => {

  const RacesTitle: string = "My Previous Races"
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleItemClick = (itemId: string) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };
  
  return (
    <section className="max-w-4xl mx-auto mb-16 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">{RacesTitle}</h2>
      <div className="flex flex-col items-end">
        {racesData.map((item, index) => (
          <RaceItem
            key={`professional-${index}`}
            name={item.name}
            date={item.date}
            place={item.place}
            distance={item.distance}
            runningTime={item.runningTime}
            participants={item.participants}
            myRanking={item.myRanking}
            maleParticipants={item.maleParticipants}
            myMaleRanking={item.myMaleRanking}
            description={item.description}
            isExpanded={expandedItem === `professional-${index}`}
            onClick={() => handleItemClick(`professional-${index}`)}
          />
        ))}
      </div>
    </section>
  );
}

export default Races;