const timeToWIB = (time) => {
  const timeSplit = time.split(":");
  const hour = timeSplit[0];
  const minute = timeSplit[1];
  const wibHour = parseInt(hour) + 7;
  const wibMinute = minute;
  return `${wibHour}:${wibMinute} WIB`;
};

export default timeToWIB;
