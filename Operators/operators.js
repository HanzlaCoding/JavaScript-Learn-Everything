// Operators (Arithmatic, Assignment, Comparison, Logical, etc.)

// Arithmetic Operators
let a = 10;
let b = 5;

let sum = a + b;          // Addition
let difference = a - b;   // Subtraction
let product = a * b;      // Multiplication
let quotient = a / b;     // Division
let remainder = a % b;    // Modulus
let exponent = a ** b;    // Exponentiation

// Assignment Operators
let c = 20;
c += 5;   // c = c + 5
c -= 3;   // c = c - 3
c *= 2;   // c = c * 2
c /= 4;   // c = c / 4

// Comparison Operators
let isEqual = (a == b);          // Equal to
let isNotEqual = (a != b);       // Not equal to
let isStrictEqual = (a === b);   // Strict equal to
let isGreater = (a > b);         // Greater than
let isLess = (a < b);            // Less than
let isGreaterOrEqual = (a >= b); // Greater than or equal to
let isLessOrEqual = (a <= b);    // Less than or equal to

// Logical Operators
let x = true;
let y = false;

let andResult = x && y;  // Logical AND
let orResult = x || y;   // Logical OR
let notResult = !x;      // Logical NOT

// Bitwise Operators
let bitwiseAnd = a & b;  // Bitwise AND
let bitwiseOr = a | b;   // Bitwise OR
let bitwiseXor = a ^ b;  // Bitwise XOR
let bitwiseNot = ~a;     // Bitwise NOT
let leftShift = a << 1;  // Left shift

let rightShift = a >> 1; // Right shift
let zeroFillRightShift = a >>> 1; // Zero-fill right shift

// Ternary Operator
let max = (a > b) ? a : b; // If a is greater than b, return a, else return b

// Type Operators
let typeOfA = typeof a;    // Returns the type of variable a
let isInstanceOfArray = ([] instanceof Array); // Checks if the object is an instance of Array

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // Spreads arr1 into arr2

// Nullish Coalescing Operator
let value = null;
let defaultValue = value ?? 'Default'; // Returns 'Default' if value is null or undefined

// Optional Chaining Operator
let obj = { nested: { prop: 42 } };
let nestedProp = obj?.nested?.prop; // Safely accesses nested property