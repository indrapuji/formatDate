export const formatDate = (date) => {
  const ts = new Date(date);
  const day = ts.toDateString().substr(0, 3);
  const month = ts.toDateString().substr(4, 3);
  const now = ts.toDateString().substr(8, 2);
  const newDate = `${day}, ${now} ${month}`;
  return newDate;
};

export const formatTime = (date) => {
  var ts = new Date(date);
  return `${ts.toString().substr(16, 5)}`;
};
