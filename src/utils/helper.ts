import { useEffect, useState } from "react";
import { TZDate } from "@toast-ui/calendar";

export const transformFontSize = (size: string) => {
  var savedValue = localStorage.getItem("fontMultiplier");
  var fontMultiplier = savedValue !== null ? JSON.parse(savedValue) : 100;

  switch (size) {
    case "3xl":
      return ((30 * fontMultiplier) / 100).toString() + "px";
    case "xl":
      return ((20 * fontMultiplier) / 100).toString() + "px";
    case "md":
      return ((16 * fontMultiplier) / 100).toString() + "px";
    case "sm":
      return ((14 * fontMultiplier) / 100).toString() + "px";
    default:
      return "16px";
  }
};

export const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};

export const convertIntoReadableMonth = (dateString: string): string => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [year, month] = dateString.split("-");

  return `${months[parseInt(month, 10) - 1]} ${year}`;
};

export const convertIntoReadableRange = (rangeString: string): string => {
  if (!rangeString) {
    return "";
  }
  const monthsShort: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function formatDate(date: string): {
    month: string;
    day: number;
    year: number;
  } {
    if (!date) {
      return {
        month: "",
        day: 0,
        year: 0,
      };
    }

    const [year, month, day] = date.split("-").map((x) => parseInt(x, 10));
    return {
      month: monthsShort[month - 1],
      day,
      year,
    };
  }

  const [startDate, endDate] = rangeString.split(" ~ ");
  const start = formatDate(startDate);
  const end = formatDate(endDate);

  return `${start.month} ${start.day} - ${end.day}, ${start.year}`;
};

export const clone = (date: TZDate): TZDate => {
  return new TZDate(date);
};

export const addHours = (d: TZDate, step: number) => {
  const date = clone(d);
  date.setHours(d.getHours() + step);

  return date;
};

export const addDate = (d: TZDate, step: number) => {
  const date = clone(d);
  date.setDate(d.getDate() + step);

  return date;
};

export const subtractDate = (d: TZDate, steps: number) => {
  const date = clone(d);
  date.setDate(d.getDate() - steps);

  return date;
};
