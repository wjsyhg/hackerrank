// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 38 && (Math.floor(grades[i] / 5) + 1) * 5 - grades[i] < 3) {
            grades[i] = (Math.floor(grades[i] / 5) + 1) * 5;
        }
    }
    return grades;
}