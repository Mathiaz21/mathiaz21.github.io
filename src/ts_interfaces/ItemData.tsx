interface Link {
  placeHolder: string,
  url: string
}

interface ItemData {
  organization: string;
  title: string;
  startDate: Date;
  endDate: Date | void;
  description: string;
  relevantLinks: Array<Link>
}

export type { ItemData, Link }