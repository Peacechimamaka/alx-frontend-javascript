export default function updateStudentGradeByCity(getList, city, newGrade) {
  const newStds = getList.filter((std) => {
    return (std.location === city)
  })
  return newStds.map((std) => {
    for (const key in newGrade) {
        if (newGrade[key] === newGrade.studentId) {
            if (newGrade.studentId === std.id) {
                std[grade] = newGrade[grade]
            } else {
                std[grade] = 'N/A'
            }
        }
    }
  })
}
