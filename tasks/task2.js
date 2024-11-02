// 1. getTopScoringStudents
// Приймає масив студентів та повертає масив імен студентів, які мають оцінку більше 80
function getTopScoringStudents(students) {
  const topScorers = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      topScorers.push(students[i].name);
    }
  }
  return topScorers;
}

// 2. getAverageAge
// Приймає масив студентів та повертає середній вік студентів
function getAverageAge(students) {
  let totalAge = 0;
  for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
  }
  const averageAge = totalAge / students.length;
  return averageAge;
}

// 3. addStudent
// Приймає масив студентів та новий об'єкт студента і додає його до масиву
function addStudent(students, student) {
  students.push(student);
  return students; // Повертаємо оновлений масив студентів
}

// 4. removeStudentByName
// Приймає масив студентів та ім'я студента, якого потрібно видалити, і повертає новий масив без цього студента
function removeStudentByName(students, name) {
  const updatedStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].name !== name) {
      updatedStudents.push(students[i]);
    }
  }
  return updatedStudents;
}

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };