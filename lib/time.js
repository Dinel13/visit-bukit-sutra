export const parseDateSQLtoString = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getFullYear()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()} ${dateObj.getHours()}:${dateObj.getMinutes()}`;
};

export const parseDateSQLtoStringDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()}-${
    dateObj.getMonth() + 1
  }-${dateObj.getFullYear()}`;
};

export const dateSQLtoDateInput = (date) => {
  const dateObj = new Date(date);
  let day = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  return `${dateObj.getFullYear()}-${month}-${day}`;
};
