
function getAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}


function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}


function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  const status = passed ? "passed" : "failed";
  return `Class average: ${average}. Your grade: ${grade}. You ${status} the course.`;
}
