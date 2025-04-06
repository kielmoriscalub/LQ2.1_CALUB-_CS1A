// Stored credentials
let storedUsername = "admin";
let storedPassword = "1234";

// Prompt user for input
const user_name = prompt("Enter Username:");
const user_password = prompt("Enter Password:");

// Check credentials
if (user_password === storedPassword && user_name === storedUsername) {
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}

// Stored credentials
let storedUsername = "admin";
let storedPassword = "1234";

// Prompt user for input
let user_name = prompt("Enter Username:");
let user_password = prompt("Enter Password:");

// Check credentials
if (user_password === storedPassword && user_name === storedUsername) {
    alert(`Welcome ${user_name}`);
} else {
    alert("Maybe Username or Password is Invalid or Does not Match");
}

// Item prices
let prices = {
    A: 1.5,  // Pepsi Cola
    B: 1.2,  // Coca Cola
    C: 3.0,  // Apple per kg
    D: 2.5,  // Orange per kg
    E: 4.0   // Hotdogs per kg
};

// Prompt user for inputitem_choice = prompt("Enter Item Choice (A-E):").toUpperCase();
QTY = parseInt(prompt("Enter Quantity:"), 10);
let Tot_Price = 0;

// Switch statement for price calculation
switch (item_choice) {
    case "A":
    case "B":
    case "C":
    case "D":
    case "E":
        Tot_Price = prices[item_choice] * QTY;
        alert(`The Total Price of the order ${item_choice} x ${QTY}: $${Tot_Price}`);
        break;
    default:
        alert("No matching item! Try to re-run the program.");
}



const createMatrix = confirm("Do you want to create a Matrix?");

if (createMatrix) {
    // Get matrix dimensions
    const rows = parseInt(prompt("Enter number of rows:"), 10);
    const cols = parseInt(prompt("Enter number of columns:"), 10);
    const depth = parseInt(prompt("Enter depth (nested level):"), 10);

    // Get strings to be printed
    const str1 = prompt("Enter first string:");
    const str2 = prompt("Enter second string:");
    const str3 = prompt("Enter third string:");

    // Generate matrix
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            for (let k = 0; k < depth; k++) {
                console.log(`[${i},${j},${k}] ${str1} ${str2} ${str3}`);
            }
        }
    }
} else {
    alert("Thank you, re-run the program if you change your mind.");
}