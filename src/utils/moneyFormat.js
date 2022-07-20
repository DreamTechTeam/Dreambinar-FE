const moneyFormat = (money) => {
  const formattedMoney = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
  return formattedMoney;
};

export default moneyFormat;
