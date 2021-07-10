const monthNames = [
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
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const convertDate = (date) => {
  const [week, month, day, year] = [
    dayNames[date.getDay()],
    monthNames[date.getMonth()],
    date.getDate(),
    date.getFullYear(),
  ];
  return week + ", " + month + " " + day + ", " + year;
};

export const addMinutes = (time, minsToAdd) => {
  function D(J) {
    return (J < 10 ? "0" : "") + J;
  }
  var piece = time.split(":");
  var mins = piece[0] * 60 + +piece[1] + +minsToAdd;

  return D(((mins % (24 * 60)) / 60) | 0) + ":" + D(mins % 60);
};
