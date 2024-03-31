/**
 * Retrieves ids from a list of students.
 * @param {Array} students - The list of students, each containing id, firstName, and location.
 * @returns {Array} An array of student ids.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
