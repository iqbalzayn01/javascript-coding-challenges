// Method 1

// function gradingStudents(grades) {
//   const average = 38;
//   let grade = [];

//   for (let i = 1; i < grades.length; i++) {
//     const nextMultiple = Math.ceil(grades[i] / 5) * 5;
//     const numberDifference = nextMultiple - grades[i];

//     if (numberDifference < 3) {
//       if (grades[i] >= average) {
//         grade.push(nextMultiple);
//       } else {
//         grade.push(grades[i]);
//       }
//     } else if (numberDifference >= 3) {
//       grade.push(grades[i]);
//     }
//   }

//   return grade;
// }

// Method 2

function gradingStudents(grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;

    const nextMultiple = Math.ceil(grade / 5) * 5;

    if (nextMultiple - grade < 3) return nextMultiple;

    return grade;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
