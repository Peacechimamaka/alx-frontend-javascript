export default function getStudentIdsSum(getListStudents) {
  const stdIds = getListStudents.map((std) => std.id);
  return stdIds.reduce((accum, initialVal) => accum + initialVal, 0);
}
