/*
Score - 15, Total - 20, Grade = C (75%)
A (90-100), B (80-89), C (70-79), D (60-69), E (0-59)
*/

let getGrade = function(score, total) {
    let percent = (score / total) * 100;
    let grade;
    if (percent >= 90) {
        grade = `A (${percent}%)`
    } else if (percent < 90 && percent >= 80) {
        grade = `B (${percent}%)`
    } else if (percent < 80 && percent >= 70) {
        grade = `C (${percent}%)`
    } else if (percent < 70 && percent >= 60) {
        grade = `D (${percent}%)`
    } else if (percent < 60 && percent >= 0) {
        grade = `E (${percent}%)`
    } else {
        grade = 'Please provide a valid score / total';
    }

    return grade;
}

console.log(getGrade());
console.log(getGrade(15, 20));
console.log(getGrade(4, 5));