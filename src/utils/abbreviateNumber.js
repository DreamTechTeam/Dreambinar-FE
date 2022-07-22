const INTERNATIONAL_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
const INDONESIAN_SYMBOL = ["", "rb", "JT", "M", "T"];

const abbreviateNumber = (number, suffixSymbol, floatDigit = 0) => {
  let tier = (Math.log10(Math.abs(number)) / 3) | 0;
  if (tier === 0) return number;
  let suffix = suffixSymbol[tier];
  let scale = Math.pow(10, tier * 3);
  let scaled = number / scale;

  return scaled.toFixed(floatDigit) + suffix;
};

export { INTERNATIONAL_SYMBOL, INDONESIAN_SYMBOL, abbreviateNumber };
