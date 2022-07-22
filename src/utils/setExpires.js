const setExpires = (day = 7) => {
  let date = new Date();
  const oneSecond = 1000;
  const oneMinute = 60 * oneSecond;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;

  date.setTime(date.getTime() + oneDay * day);

  return date;
};

export default setExpires;
