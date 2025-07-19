import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { TimelineData } from "@/ts_interfaces/TimelineData"
import { ItemProps } from "@/ts_interfaces/ItemProps";
import { ItemData } from "@/ts_interfaces/ItemData";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export { cn }