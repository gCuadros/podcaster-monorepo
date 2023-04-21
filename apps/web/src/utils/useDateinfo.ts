import { format } from "date-fns";

export const getDateInfo = (targetDate: number | string) => {
  const date = new Date(targetDate);
  const day = date.getDate();
  const dayName = format(date, "EEEE");
  const month = date.getMonth() + 1;
  const monthName = format(date, "MMMM");
  const year = date.getFullYear();
  const yearName = format(date, "yyyy");
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return {
    date,
    day,
    dayName,
    month,
    monthName,
    year,
    yearName,
    hours,
    minutes,
    seconds,
  };
};
