export type TypeButton = {
  id: number | string;
  title: string;
  className: string;
};

export type TypeTitleHeader = {
  title: string;
  subTitle: string;
};

export type TypeGlowCard = {
  review: string;
  index?: number;
  children: React.ReactNode;
};

export type TypeBlog = {
  id: number;
  index: number;
  title: string;
  summary: string;
  description: string;
  imgPath: string;
  date: string;
  link: string;
};