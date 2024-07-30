export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((std) => std.location === city);
}
