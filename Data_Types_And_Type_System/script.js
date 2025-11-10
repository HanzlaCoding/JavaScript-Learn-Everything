// Data Types
// Primitives & Reference Types

// Primitive Data Types
// => ye wo data types hote hain jo immutable hote hain aur direct value store karte hain.

// Primitive Data Types Examples
// string , number, boolean, undefined, null, symbol, bigInt
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigInt = 9007199254740991n; // BigInt

// Reference Data Types
// => ye wo data types hote hain jo mutable hote hain aur reference store karte hain. mtlb ke gaari meri or kisi or ko dedo to gari meri hi thuke gi hogi uski bhi but meri gari ka accident bhi hogaya to uski bhi gari ka accident hoga.
// Reference Data Types Examples
// Array, Object, Function
let arr = [1, 2, 3]; // Array
let obj = { name: "Alice", age: 30 }; // Object
let func = function () { return "I am a function"; }; // Function

// String
// "", '', ``
let singleQuoteStr = 'This is a string with single quotes';
let doubleQuoteStr = "This is a string with double quotes";
let backtickStr = `This is a string with backticks`;

// Number
let integerNum = 100;

let floatNum = 99.99;

// Boolean
let isJavaScriptFun = true;
let isSkyGreen = false;

// Undefined
// undefiuned ka matlab hota hai ke variable declare to ho gaya lekin usme koi value assign nahi hui.
let notAssigned;

// Null
// null ka matlab hota hai ke variable intentionally empty hai.
let emptyValue = null;

// Symbol
// symbol ek unique identifier hota hai. jesy ke ik naya id generate karna. fro example: ik library ha usme har book ka ik unique id hona chahiye to hum symbol use kar sakte hain.
let uniqueId = Symbol("id");

// BigInt
let largeNumber = 1234567890123456789012345678901234567890n;

// Dynamic Typing => JavaScript mein variable ka type runtime pe change ho sakta hai. dynamic typing se muraad ye hai ke aap ek variable mein pehle string store kar sakte hain aur baad mein usi variable mein number ya boolean store kar sakte hain. static typed languages mein aisa nahi hota. 
let dynamicVar = "I am a string";
console.log(typeof dynamicVar); // string

dynamicVar = 42;
console.log(typeof dynamicVar); // number

dynamicVar = true;
console.log(typeof dynamicVar); // boolean

// Type Coercion => JavaScript automatically data types ko convert kar deta hai jab zarurat hoti hai.
let coercedValue = "5" + 10; // string concatenation
console.log(coercedValue); // "510"
console.log(typeof coercedValue); // string

let coercedValue2 = "5" * 2; // multiplication
console.log(coercedValue2); // 10
console.log(typeof coercedValue2); // number

// type of quircks
console.log(typeof null); // "object" (ye ek bug hai jo abhi tak fix nahi hua)
console.log(typeof NaN); // "number" (NaN ka matlab hai Not-a-Number lekin iska type number hi hota hai)

// Type Coercion
let value = "10";
let numberValue = value * 1; // yahan string "10" ko number 10 mein convert kar diya gaya hai
console.log(typeof numberValue); // "number"

let boolValue = !!value; // yahan string "10" ko boolean true mein convert kar diya gaya hai
console.log(typeof boolValue); // "boolean"

// Type Coercion with == && === operator   
let looseEquality = (5 == "5"); // true, because of type coercion
let strictEquality = (5 === "5"); // false, no type coercion

console.log(looseEquality); // true
console.log(strictEquality); // false

// Truthy & falsy values
// Falsy values: false, 0, "", null, undefined, NaN document.all 
// Truthy values: jo bhi value falsy na ho wo truthy hoti hai.

// Summary
// Primitive Data Types: string, number, boolean, undefined, null, symbol, bigInt
// Reference Data Types: Array, Object, Function
// Dynamic Typing: JavaScript mein variable ka type runtime pe change ho sakta hai.
// Type Coercion: JavaScript automatically data types ko convert kar deta hai jab zarurat hoti hai. 


// why nan is of type number
console.log(typeof NaN); // "number"
// NaN ka matlab hai Not-a-Number lekin JavaScript mein NaN ko number type ke under rakha gaya hai taake mathematical operations mein asani ho.

// what is null and undefined
//  undefined ka matlab hai ke variable declare to ho gaya lekin usme koi value assign nahi hui. null ka matlab hai ke variable intentionally empty hai.
let undefinedVar;