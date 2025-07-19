import { ItemData } from '@/ts_interfaces/ItemData'
import React from 'react'
import { Separator } from '@radix-ui/react-separator'

const ItemCard: React.FC<ItemData> = ({
  organization,
  title,
  startDate,
  endDate,
  description,
  relevantLinks
}) => {

    const dateParseOptions: object = {
    month: "short",
    year: "numeric"
  }
  const startDateStr: string = startDate.toLocaleDateString("en-US", dateParseOptions)
  const endDateStr: string = endDate ? endDate.toLocaleDateString("en-US", dateParseOptions) : "Present"

  return (
    <div className="rounded-xl shadow-xl p-5 w-full max-w-2xl bg-white/30">
      <p className="font-bold text-xl">{organization}</p>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-sm text-gray-600 mb-2">{startDateStr} - {endDateStr}</p>
      <Separator className="my-2 h-[2px] bg-gray-300" />
      <p>{description}</p>
      <br/>
      <p className="text-gray-600">Relevant links</p>
      <ul className="list-inside">
        {relevantLinks.map((link, index) => (
          <li key={index}>
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 transition-colors"
              href={link.url}
            >
              {link.placeHolder}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemCard