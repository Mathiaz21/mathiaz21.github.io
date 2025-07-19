interface ItemData {
  organization: string;
  title: string;
  startDate: Date;
  endDate: Date | void;
  description: string;
}

export type {ItemData}