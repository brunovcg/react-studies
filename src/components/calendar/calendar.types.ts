export type CalendarProps = {
  startDate?: Date;
};

export type DataSourceType = {
  id: number;
  header: string;
  date: Date;
  body: string;
  isToday: boolean;
  isSelected: boolean;
};
