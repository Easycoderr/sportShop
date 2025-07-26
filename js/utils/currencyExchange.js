export function convertUSDtoIQD(value, currency) {
  const price = Math.floor((value * currency) / 100);
  return `${price.toLocaleString()} IQD`;
}
