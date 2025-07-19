import { ItemData } from "./ItemData"

interface ItemProps extends ItemData {
  isExpanded: boolean;
  onClick: () => void;
}

export type { ItemProps }