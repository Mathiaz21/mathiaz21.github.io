import { ItemData } from '@/ts_interfaces/ItemData'
import React from 'react'
import { Separator } from '@radix-ui/react-separator'

const ItemCard: React.FC<ItemData> = ({
  organization,
  title,
  startDate,
  endDate,
  description,
}) => {

    const dateParseOptions: object = {
    month: "short",
    year: "numeric"
  }
  const startDateStr: string = startDate.toLocaleDateString("en-US", dateParseOptions)
  const endDateStr: string = endDate ? endDate.toLocaleDateString("en-US", dateParseOptions) : "Present"

  return (
    <div className="rounded-xl shadow-xl p-5 w-full max-w-2xl">
            <p className="font-bold text-xl">{organization}</p>
            <p className="text-sm text-gray-600">{title}</p>
            <p className="text-sm text-gray-600 mb-2">{startDateStr} - {endDateStr}</p>
            <Separator className="my-2 h-[2px] bg-gray-300" />
            <p>{description}</p>

    </div>
  )
}

export default ItemCard