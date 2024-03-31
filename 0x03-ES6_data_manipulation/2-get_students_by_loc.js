/**
 * Retrieves students in a given location.
 * @param {Array} students - The list of students, each containing id, firstName, and location.
 * @param {String} city - The location to filter by.
 * @returns {Array} An array of students in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
