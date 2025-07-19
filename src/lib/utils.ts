import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TimelineData } from "@/ts_interfaces/TimelineData"
import { TimelineProps } from "@/ts_interfaces/TimelineProps";
import { ItemProps } from "@/ts_interfaces/ItemProps";
import { ItemData } from "@/ts_interfaces/ItemData";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};


function dataToProps(data: TimelineData, onClick: () => void) {
  let itemPropsArray: Array<ItemProps> = new Array<ItemProps>()

  for (const itemData in data.itemDataArray) {
    const organization: string = itemData
    const itemProps: ItemProps = {
      organization: organization,
      title: organization,
      startDate: new Date(),
      endDate: new Date(),
      description: organization,
      isExpanded: false,
      onClick: onClick
    }
    itemPropsArray.push(itemProps)
  }
  return itemPropsArray
}

export { cn, dataToProps }