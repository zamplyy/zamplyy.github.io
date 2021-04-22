const locale = "sv";

export const dateFromNumber = (date: number): Date => {
  return new Date(date);
};

export const dayAndMonthFromDate = (dateNumber: number): string => {
  const date = dateFromNumber(dateNumber);
  const month = date.toLocaleString(locale, { month: "long" });
  return `${date.getDay()} ${month}`;
};
