const getLetterGrade = (gradeScale, mark, level) => {
  if (mark < 0 || mark > 100) {
    throw new Error("Marks are out of range.");
  }
  if (!Array.isArray(gradeScale) || !gradeScale.length) {
    throw new Error("Grade scale not provided.");
  }
  const gradeInformation = gradeScale.filter(
    (grade) =>
      grade.level === level && mark >= grade.min_mark && mark <= grade.max_mark
  );
  return gradeInformation[0].grade;
};

module.exports = { getLetterGrade };
