// 1. Convert the string "123" to a number and add 7
function q1() {
  return Number("123") + 7;
}
console.log("Q1:", q1()); 

// 2. Check if the variable is falsy -> "Invalid"
function q2(value) {
  if (!value) {
    return "Invalid";
  }
  return value;
}
console.log("Q2:", q2(0)); 

// 3. for loop 1..10 skipping even numbers using continue
function q3() {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    result.push(i);
  }
  console.log("Q3:", result.join(", "));
}
q3();

// 4. Return only even numbers using filter
function q4(arr) {
  return arr.filter((n) => n % 2 === 0);
}
console.log("Q4:", q4([1, 2, 3, 4, 5])); 

// 5. Merge two arrays using spread operator
function q5(a, b) {
  return [...a, ...b];
}
console.log("Q5:", q5([1, 2, 3], [4, 5, 6]));

// 6. switch: number -> day of the week (1 = Sunday ... 7 = Saturday)
function q6(num) {
  switch (num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}
console.log("Q6:", q6(2)); 

// 7. Lengths of strings using map
function q7(arr) {
  return arr.map((str) => str.length);
}
console.log("Q7:", q7(["a", "ab", "abc"])); 

// 8. Check if a number is divisible by 3 and 5
function q8(n) {
  if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
  if (n % 3 === 0) return "Divisible by 3 only";
  if (n % 5 === 0) return "Divisible by 5 only";
  return "Not divisible by 3 or 5";
}
console.log("Q8:", q8(15));

// 9. Arrow function: square of a number
const q9 = (n) => n * n;
console.log("Q9:", q9(5)); 

// 10. Destructure an object and return a formatted string
function q10({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: "John", age: 25 };
console.log("Q10:", q10(person)); 

// 11. Multiple parameters -> sum (rest parameters)
function q11(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0);
}
console.log("Q11:", q11(1, 2, 3, 4, 5)); 

// 12. Promise that resolves after 3 seconds with "Success"
function q12() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 3000);
  });
}
q12().then((msg) => console.log("Q12:", msg)); 

// 13. Largest number in an array
function q13(arr) {
  return Math.max(...arr);
}
console.log("Q13:", q13([1, 3, 7, 2, 4])); 

// 14. Return only the keys of an object
function q14(obj) {
  return Object.keys(obj);
}
console.log("Q14:", q14({ name: "John", age: 30 })); 

// 15. Split a string into words based on spaces
function q15(str) {
  return str.split(" ");
}
console.log("Q15:", q15("The quick brown fox")); 