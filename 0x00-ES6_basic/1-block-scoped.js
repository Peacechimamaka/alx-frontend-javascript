export default function taskBlock(trueOrFalse) {
  const task = false; /* eslint-disable */
  const task2 = true; /* eslint-disable */

  if (trueOrFalse) {
    const task = true; /* eslint-disable no-unused-vars */
    const task2 = false; /* eslint-disable */
  }

  return [task, task2];
}
