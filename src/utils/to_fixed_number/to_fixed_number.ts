export default function toFixedNumber(num, digits, base) {
  var pow = Math.pow(base || 10, digits);
  return Math.round(num * pow) / pow;
}
