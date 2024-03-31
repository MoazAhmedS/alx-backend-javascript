/**
 * Updates the grades of students in a given city.
 * @param {Array} students - The list of students.
 * @param {String} city - The city of the students.
 * @param {Array} newGrades - The new grades.
 * @returns {Array} An array
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
