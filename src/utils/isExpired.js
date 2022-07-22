const isExpired = (dateEnd) => {
  return new Date(dateEnd).getTime() < new Date().getTime()
};

export default isExpired