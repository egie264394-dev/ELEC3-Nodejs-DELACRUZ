
/*
Name: EGIE BOY P. DELA CRUZ
Section: IV-BSIT A
Activity: N2 - Modular Calculator
Date: November 17, 2026
*/

// Import built-in OS module
const os = require('os');

// Import custom modules
const operations = require('./operations');
const formatResult = require('./formatter');

// Read command-line arguments
const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

// Display student information
console.log("=================================");
console.log("N2 - MODULAR CALCULATOR");
console.log("Name: EGIE BOY P. DELA CRUZ");
console.log("Section: IV-BSIT A");
console.log("=================================");

// Check if the operation is valid
const validOperations = [
    "add",
    "subtract",
    "multiply",
    "divide",
    "average"
];

if (!validOperations.includes(operation)) {
    console.log("Error: Unknown operation.");
    console.log("Available operations: add, subtract, multiply, divide, average");
    process.exit(1);
}

// Check if the numbers are valid
if (
    process.argv[3] === undefined ||
    process.argv[4] === undefined ||
    !Number.isFinite(num1) ||
    !Number.isFinite(num2)
) {
    console.log("Error: Please provide two valid numbers.");
    process.exit(1);
}

// Perform the selected operation
try {
    const result = operations[operation](num1, num2);

    // Display formatted result
    console.log(formatResult(operation, num1, num2, result));

} catch (error) {
    console.log("Error:", error.message);
}

// Display operating system information
console.log("Operating System:", os.platform());
