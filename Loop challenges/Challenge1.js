// Challenge 1: Chai and Mandazi Counter

let bothCount = 0;

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Chai & Mandazi");
        bothCount++;
    } 
    else if (i % 3 === 0) {
        console.log("Chai");
    } 
    else if (i % 5 === 0) {
        console.log("Mandazi");
    } 
    else {
        console.log(i);
    }
}

console.log("Both count:", bothCount);



//Challenge2.js


let goal = 5000;
let month = 1;
let saving = 100;
let totals = 0;

while (totals < goal) {

    totals += saving;

    let message = `Month ${month}: saved KES ${saving}, total KES ${totals}`;

    if (saving >= 500) {
        message += " - Big month!";
    }

    console.log(message);

    month++;
    saving += 50;
}

console.log(`Goal reached in month ${month - 1} with KES ${totals}!`);



let marks = [78, 45, -5, 92, 60, 101, 55, 38];

// Counters and variables
let validMarks = 0;
let passes = 0;
let fails = 0;
let total = 0;
let highest = 0;
let highestStudent = 0;

// Loop through the marks
for (let i = 0; i < marks.length; i++) {

    let mark = marks[i];

    // Check for invalid marks
    if (mark < 0 || mark > 100) {
        console.log(`Student ${i + 1}: invalid mark, skipped`);
        continue;
    }

    // Count valid marks and calculate total
    validMarks++;
    total += mark;

    // Find the highest mark
    if (mark > highest) {
        highest = mark;
        highestStudent = i + 1;
    }

    // Determine grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B";
    } else if (mark >= 60) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Determine pass or fail
    let result;

    if (mark >= 50) {
        result = "Pass";
        passes++;
    } else {
        result = "Fail";
        fails++;
    }

    console.log(`Student ${i + 1}: ${mark} - Grade ${grade} (${result})`);
}

// Calculate average
let average = total / validMarks;

// Print summary
console.log("--------------------");
console.log(`Valid marks: ${validMarks}`);
console.log(`Passed: ${passes}`);
console.log(`Failed: ${fails}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highest} (Student ${highestStudent})`);