/**
 * Retrieves the sum of ids of a list of students.
 * @param {Array} students - The list of students, each containing id, firstName, and location.
 * @returns {Number} The sum of student ids.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id ? prevStudent.id + curStudent.id : prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
