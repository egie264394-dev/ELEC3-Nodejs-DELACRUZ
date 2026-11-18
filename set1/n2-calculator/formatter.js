
/*
Name: EGIE BOY P. DELA CRUZ
Section: IV-BSIT A
Activity: N2 - Modular Calculator
Date: November 17, 2026
*/

// Format the calculation result
function formatResult(operation, a, b, result) {

    let symbol;

    switch (operation) {
        case "add":
            symbol = "+";
            break;

        case "subtract":
            symbol = "-";
            break;

        case "multiply":
            symbol = "*";
            break;

        case "divide":
            symbol = "/";
            break;

        case "average":
            symbol = "average";
            break;

        default:
            symbol = operation;
    }

    return `${operation === "average" ? "Average" : `${a} ${symbol} ${b}`} = ${result}`;
}

// Export the formatter function
module.exports = formatResult;