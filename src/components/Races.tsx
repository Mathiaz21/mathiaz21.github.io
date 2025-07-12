import React, {useState} from "react";
import RaceItem from "./RaceItem";
import races from "@/data/races";


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
        {races.map((item, index) => (
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