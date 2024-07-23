export default function returnHowManyArguments(...args) {
  const arr = args.map((arg) => arg);
  return arr.length;
}
