// if else-if else
// switch case
// ternary operator
// short-circuit evaluation

// if else-if else
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// switch case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day:", dayName);

// ternary operator
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log("Can vote:", canVote);

// short-circuit evaluation
let isLoggedIn = true;
let welcomeMessage = isLoggedIn && "Welcome back!";
console.log(welcomeMessage);

let userRole = null;
let defaultRole = userRole || "Guest";
console.log("User role:", defaultRole);

// Early return pattern
function checkAccess(user) {
    if (!user) {
        return "Access denied: No user provided.";
    }
    if (!user.isActive) {
        return "Access denied: User is not active.";
    }
    return "Access granted.";
}

// Rock, paper, scissors game
function rps(player1, player2) {
    if (player1 === player2) {
        return "It's a tie!";
    }
    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}

console.log(rps("rock", "scissors")); // Player 1 wins!
console.log(rps("paper", "rock"));    // Player 1 wins!
console.log(rps("scissors", "scissors")); // It's a tie!

console.log(checkAccess(null)); // Access denied: No user provided.
console.log(checkAccess({ isActive: false })); // Access denied: User is not active.
console.log(checkAccess({ isActive: true })); // Access granted.

// End of controlFlow.js